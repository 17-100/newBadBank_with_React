function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#" onclick="defaultModule()">New BadBank</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="#" onClick="loadCreateAccount()">Create Account</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" onClick="loadLogin()">Login</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" onClick="loadDeposit()">Deposit</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" onClick="loadWithdraw()">Withdraw</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" onClick="loadBalance()">Balance</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" onClick="loadAllData()">AllData</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                  </li>
                </ul>

              </div>
            </div>
        </nav>
    )
}

