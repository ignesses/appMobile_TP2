export const NavBarComponent = () => {
  return (
    <div className="container-fluid px-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item p-2">
              <a className="nav-link text-uppercase" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link text-uppercase" href="/characters">
                Personajes
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link text-uppercase" href="/starships">
                Naves
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link text-uppercase" href="/about">
                Acerca De
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
