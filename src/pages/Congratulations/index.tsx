import Button from "components/Button";
import { Fragment } from "react";
import Header from "shared/Header";
import "./styles.scss";

const Congratulations = () => {
  return (
    <Fragment>
      <Header variant="white" />
      <div className="wrapper-content">
        <div className="container">
          <div className="banner-welcome" />
          <div className="content-welcome">
            <h5>
              <span>¡Te damos la bienvenida!</span>
            </h5>
            <h5 className="mb-2">
              Cuenta con nosotros para proteger tu vehículo
            </h5>
            <p className="mb-5">
              Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:
              <br/>
              <span>joel.sanchez@gmail.com</span>
            </p>
            <Button>CÓMO USAR MI SEGURO</Button>
          </div>
          <div className="copyright-welcome d-mobile">
            <p>© 2021 RIMAC Seguros y Reaseguros.</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Congratulations;
