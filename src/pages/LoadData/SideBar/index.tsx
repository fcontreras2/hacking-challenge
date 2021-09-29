import { Link } from "react-router-dom";
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

const SideBar = () => (
  <div className="sidebar">
    <div className="d-mobile">
      <Link className="button-back --gray" to={"/"}>
        <button>
          {" "}
          <img src="/images/icon-arrow-left.svg" alt="Fecha" />
        </button>
        <span className="mr-1">PASO 2 DE 2</span>
        <div className="sidebar__progress"></div>
      </Link>
    </div>
    <div className="d-desktop">
      {MENU.map((e, i) => (
        <div className="sidebar__menu" key={i * 2 + "side"}>
          <span className="mr-2">{i + 1}</span>
          <Link to={e.link}>{e.label}</Link>
        </div>
      ))}
    </div>
  </div>
);

export default SideBar;
