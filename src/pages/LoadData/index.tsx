import { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "shared/Header";
import InputAccount from "./InputAccount";
import Summary from "./Summary";
import SideBar from "./SideBar";
import "./styles.scss";

const LoadData = () => (
  <Fragment>
    <Header variant="white" />
    <div className="wrapper-content">
      <div className="container">
        <SideBar />
        <div className="content">
          <Link className="button-back d-desktop" to={'/'}>
            <button>
              {" "}
              <img src="/images/arrow.svg" alt="Fecha" />
            </button>
            <span>VOLVER</span>
          </Link>
          <div className="main mt-3">
            <div className="info">
              <div className="info__title mb-5">
                <h6 className="mb-1 d-mobile">
                Mira las coberturas
                </h6>

                <h6 className="mb-1 d-desktop">
                  ¡Hola, <span>Juan!</span>
                </h6>
                <p>Conoce las coberturas para tu plan</p>
              </div>
              <div className="info__card mb-6">
                <span>Placa: 123213</span>
                <h6>Wolkswagen 2019 Golf</h6>
              </div>
              <InputAccount />
            </div>
            <Summary />
          </div>
        
        </div>
      </div>
    </div>
  </Fragment>
);

export default LoadData;
