import "./styles.scss";

const Header = () => (
  <div className="container">
    <div className="header">
      <img
        src="/images/logo.svg"
        className="header__image"
        alt="Logo Rimac"
      ></img>
      <div className="header__phone d-desktop">
        <span>¿Tienes alguna duda?</span>
        <a className="d-none" href="tel:0144116001">
          <img src="/images/phone.svg" alt="Telefono"></img>
          (01) 411 6001
        </a>
      </div>
      <div className="header__phone d-mobile">
        <a className="d-none" href="tel:0144116001">
        <img src="/images/phone.svg" alt="Telefono"></img>
          Llámanos
        </a>
      </div>
    </div>
  </div>
);

export default Header;
