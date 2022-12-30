function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" id="nav-home" href="#">
            BankApp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" id="nav-createaccount" href="#/createaccount/" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="To create a new bank account." data-bs-trigger="hover">
                  Create Account
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="nav-login" href="#/login/" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Login a bank account." data-bs-trigger="hover">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="nav-deposit" href="#/deposit/" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Deposit money into a bank account." data-bs-trigger="hover">
                  Deposit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="nav-withdraw" href="#/withdraw/" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Withdraw money from a bank account." data-bs-trigger="hover">
                  Withdraw
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="nav-alldata" href="#/alldata/" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Display all account information" data-bs-trigger="hover">
                  AllData
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

function highlightNavLink(currentPage) {
  let navLinks = document.getElementsByClassName("nav-link");
  for (let navLink of navLinks) {
    navLink.style.backgroundColor = "";
  }
  if(currentPage === "nav-home") {
    document.getElementById(currentPage).style.color = "#FFFFFF";
  } else {
    document.getElementById("nav-home").style.color = "#009966";
    document.getElementById(currentPage).style.backgroundColor = "#339999";
  }
}