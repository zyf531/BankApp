function Deposit(){
  const [show, setShow] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [balance, setBalance] = React.useState(0);
  const ctx = React.useContext(UserContext);
  
  React.useEffect(() => {
    highlightNavLink("nav-deposit"); 

    ctx.users.forEach((user) => {
      if (user.name === ctx.loginid) {
        setShow(true);
        setBalance(user.balance);
        return;
      }
    });

    if (show) {
      if(amount) {
        document.getElementById('btn-deposit').disabled = false;
      } else {
        document.getElementById('btn-deposit').disabled = true;
      }
    }
  });

  function validateEmpty(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => {
        setStatus('');
        setAmount('');
      }, 3000);
      return false;
    }
    return true;
  }

  function validateNumber(field, label) {
    if (!/^\-?[0-9]+$/.test(field)) {
      setStatus("Error: " + label);
      setTimeout(() => {
        setStatus('');
        setAmount('');
      }, 3000);
      return false;
    }
    return true;
  }

  function validateNegative(field, label) {
    if (/^((-[0-9]+)|(0+))$/.test(field)) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleDeposit() {
    console.log(amount);
    let newBalance = 0;
    if (!validateEmpty(amount, "Amount is empty!")) return;
    if (!validateNumber(amount, "Amount is not a number!")) return;
    if (!validateNegative(amount, "Amount is negative or zero!")) return;
    let newUsers = ctx.users.map((user) => {
      if (user.name === ctx.loginid) {
        newBalance = user.balance + parseInt(amount);
        user.balance = newBalance;
      }
      return user;
    });
    ctx.users = newUsers;
    console.log(JSON.stringify(ctx.users));

    setBalance(newBalance);
    setStatus("You've successfully deposited $" + amount);
    setTimeout(() => setStatus(''), 3000);
    setAmount("");
  }

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={
        show ? (
          <>
            <h3>Balance: {balance}</h3>
            <br />
            Amount
            <br />
            <input
              type="input"
              className="form-control"
              id="amount"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
            />
            <br />
            <button
              id="btn-deposit"
              type="submit"
              className="btn btn-dark"
              onClick={handleDeposit}
            >
              Deposit
            </button>
          </>
        ) : (
          <>
            <h5>Please login first!</h5>
          </>
        )
      }
    />
  );
}