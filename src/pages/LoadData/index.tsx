import { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "shared/Header";
import InputAccount from "./InputAccount";
import Summary from "./Summary";
import SideBar from "./SideBar";
import "./styles.scss";
import Tabs from "shared/Tabs";

const TABS = [
  {
    title: "Protege a tu auto",
    options: [
      {
        title: "Llanta robada",
        icon: "/images/icon-llanta.svg",
        active: true,
        description: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
      },
      {
        title: "Choque y/o pasarte la luz roja ",
        icon: "/images/icon-llanta.svg",
        active: true,
        description: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
      },

      {
        title: "Atropello en la vía Evitamiento",
        icon: "/images/icon-llanta.svg",
        active: true,
        description: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
      },

       
    ],
  },
  {
    title: "Protege a los que te rodean",
    options: [
      {
        title: "Llanta robada2",
        icon: "/images/icon-llanta.svg",
        active: true,
        description: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
      },
      {
        title: "Choque y/o pasarte la luz roja2 ",
        icon: "/images/icon-llanta.svg",
        active: true,
        description: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
      },

      {
        title: "Atropello en la vía Evitamiento2",
        icon: "/images/icon-llanta.svg",
        active: true,
        description: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
      },
    ],
  },
  {
    title: "Mejora tu plan",
    options: [
      {
        title: "Llanta robada3",
        icon: "/images/icon-llanta.svg",
        active: true,
        description: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
      },
      {
        title: "Choque y/o pasarte la luz roja 3",
        icon: "/images/icon-llanta.svg",
        active: true,
        description: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
      },

      {
        title: "Atropello en la vía Evitamiento3",
        icon: "/images/icon-llanta.svg",
        active: true,
        description: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más",
      },
    ],
  },
];

const LoadData = () => (
  <Fragment>
    <Header variant="white" />
    <div className="wrapper-content">
      <div className="container">
        <SideBar />
        <div className="content">
          <Link className="button-back d-desktop" to={"/"}>
            <button>
              {" "}
              <img src="/images/arrow.svg" alt="Fecha" />
            </button>
            <span>VOLVER</span>
          </Link>
          <div className="main mt-3">
            <div className="info">
              <div className="info__title mb-5">
                <h6 className="mb-1 d-mobile">Mira las coberturas</h6>

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
              <Tabs
                title="Agrega o quita coberturas"
                tabs={TABS}
                onChange={() => {}}
              />
            </div>
            <Summary />
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default LoadData;
