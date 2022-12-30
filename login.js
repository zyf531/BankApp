function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("JacksonZhang");
  const [password, setPassword] = React.useState("12345678");
  const ctx = React.useContext(UserContext);

  React.useEffect(() => {
    highlightNavLink("nav-login");
    
    if (ctx.loginid) {
      setShow(false);
      return;
    }

    if (show) {
      if(name && password) {
        document.getElementById('btn-login').disabled = false;
      } else {
        document.getElementById('btn-login').disabled = true;
      }
    }
  });

  function validateEmpty(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function validateLength(field, length, label) {
    if (field.length < length) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleLogin() {
    console.log(name, password);
    if (!validateEmpty(name, "The name cannot be empty!")) return;
    if (!validateEmpty(password, "Password is empty!")) return;
    if (!validateLength(name, 2, "Name is less than 2 characters!")) return;
    if (!validateLength(password, 8, "Password is less than 8 characters!")) return;

    ctx.users.forEach((user) => {
      if (name === user.name && password === user.password) {
        ctx.loginid = name;
        return;
      }
    });

    if (ctx.loginid) {
      setShow(false);
    } else {
      setStatus("Invalid account!");
      setTimeout(() => setStatus(''), 3000);
      setName("");
      setPassword("");
    }
  }

  function handleLogout() {
    ctx.loginid = "";
    setShow(true);
  }

  return (
    <Card
      bgcolor="info"
      header="Login"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              id="btn-login"
              type="submit"
              className="btn btn-dark"
              onClick={handleLogin}
            >
              Login
            </button>
          </>
        ) : (
          <>
            <h5>Welcome {ctx.loginid}</h5>
            <p>You've successfully logged in.</p>
            <button id="btn-logout" type="submit" className="btn btn-dark" onClick={handleLogout}>
              Logout
            </button>
          </>
        )
      }
    />
  );
}

