import "./NavBar.css";

const NavBar = () => {
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="Pen And Paper" href="###">
        Navbar
        <img
          src="download.jpeg"
          alt="Logo"
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        >
          Bootstrap{" "}
        </img>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="Home">
            <a class="nav-link active" aria-current="page" href="###">
              Home
            </a>
          </li>
          <li class="Shops">
            <a class="nav-link" href="###">
              Features
            </a>
          </li>
          <li class="cart">
            <a class="nav-link" href="###">
              Pricing
            </a>
          </li>
          <li class="contact">
            <a class="nav-link" href="###">
              About
            </a>
          </li>
          <li class="Country">
            <a
              class="nav-link dropdown-toggle"
              href="###"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="Uganda" href="###">
                  country 1
                </a>
              </li>
              <li>
                <a class="Kenya" href="###">
                  country 2
                </a>
              </li>
              <li>
                <a class="Tanzania" href="###">
                  country 3
                </a>
              </li>
              <li>
                <a class="Rwanda" href="###">
                  country 4
                </a>
              </li>
              <li>
                <a class="Burundi" href="###">
                  country 5
                </a>
              </li>
              <li>
                <a class="DRC" href="###">
                  country 6
                </a>
              </li>
              <li>
                <a class="South Sudan" href="###">
                  country 7
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <form class="d-flex" align-content="right" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  </nav>;
};
export default NavBar;
