function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

  React.useEffect(() => {
    highlightNavLink("nav-createaccount")

    if (show) {
      if (name || email || password) {
        document.getElementById('btn-switch').disabled = false;
      } else {
        document.getElementById('btn-switch').disabled = true;
      }
    }
  });

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function validateLength(field, length, label) {
    if (field.length < length) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "The name cannot be empty!")) return;
    if (!validate(email, "Email address is empty!")) return;
    if (!validate(password, "Password is empty!")) return;
    if (!validateLength(name, 2, "Name is less than 2 characters!")) return;
    if (!validateLength(email, 6, "Email address is less than 6 characters!")) return;
    if (!validateLength(password, 8, "Password is less than 8 characters!")) return;
    ctx.users.push({ name, email, password, balance: 100 });
    console.log(JSON.stringify(ctx.users));
    setShow(false);
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="dark "
      header="Create Account"
      status={status}
      body={show ? (
        <>
          Name<br />
          <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br />
          Email address<br />
          <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
          Password<br />
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br />
          <button type="submit" id="btn-switch" className="btn btn-light" onClick={handleCreate}>Create Account</button>
        </>
      ) : (
        <>
          <h5>Add Success</h5>
          <p>You've successfully added account for {name}.</p>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
        </>
      )}
    />
  )
}