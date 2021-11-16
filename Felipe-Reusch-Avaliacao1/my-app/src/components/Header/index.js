import './style.scss';

const Header = ({ empresa, temaEscuro }) => {

  return (
    <header className="sticky-top">
      <nav className={`navbar navbar-expand-sm navbar-${temaEscuro ? 'dark' : 'light'} bg-${temaEscuro ? 'dark' : 'light'}`} aria-label="Third navbar example">
        <div className="container-fluid">
          <a className="navbar-brand" href="#galeria">{empresa}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarsExample03">
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#galeria">Churrasco</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#galeria">Video</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">Conteúdo</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;