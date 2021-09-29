import { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "shared/Header";
import InputAccount from "./InputAccount";
import "./styles.scss";

type Menu = {
  label: string;
  link: string;
};

const MENU: Menu[] = [
  {
    label: "Datos",
    link: "",
  },
  {
    label: "Arma tu plan",
    link: "/carga-informacion",
  },
];

const LoadData = () => (
  <Fragment>
    <Header variant="white" />
    <div className="wrapper-content">
      <div className="container">
        <div className="sidebar">
          {MENU.map((e, i) => (
            <div className="sidebar__menu">
              <span className="mr-2">{i + 1}</span>
              <Link to={e.link}>{e.label}</Link>
            </div>
          ))}
        </div>
        <div className="content">
          <Link className="content__back" to={MENU[0].link}>
            <button>
              {" "}
              <img src="/images/arrow.svg" alt="Fecha" />
            </button>
            <span>VOLVER</span>
          </Link>
          <div className="main mt-3">
            <div className="info">
              <div className="info__title mb-5">
                <h6 className="mb-1">
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
            <div className="summary">
              <p>Resumen</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </Fragment>
);

export default LoadData;
