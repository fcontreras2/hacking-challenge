import { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "shared/Header";
import "./styles.scss";

type Menu = {
  label: string;
  link: string;
}

const MENU:Menu[] = [
  {
    label: 'Datos',
    link: ''
  },
  {
    label: 'Arma tu plan',
    link: '/carga-informacion'
  }
]

const LoadData = () => (
  <Fragment>
    <Header variant="white" />
    <div className="wrapper-content">
      <div className="container">
        <div className="sidebar">
          {
            MENU.map((e, i) => (
              <div className="sidebar__menu">
                <span className="mr-2">{i + 1}</span>
                <Link to={e.link}>{e.label}</Link>
              </div>
            ))
          }
        </div>
        <div className="content">
          <p>b</p>
        </div>
      </div>
    </div>
  </Fragment>
);

export default LoadData;
