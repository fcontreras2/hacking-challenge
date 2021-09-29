import Button from "components/Button";
import "./styles.scss";

export const Summary = () => {
  return (
    <div className="summary d-desktop">
      <p className="summary__amount">MONTO</p>
      <h6 className="summary__price">$35.00</h6>
      <span className="summary__mouths">mensuales</span>
      <div className="summary__divider"></div>
      <p className="summary__include mb-1">El precio incluye:</p>
      <ul className="summary__list mb-4">
        <li className="mb-1"><img className="mr-2" src="/images/icon-check.svg" alt="Icono check" />Llanta de respuesto</li>
        <li className="mb-1"><img className="mr-2" src="/images/icon-check.svg" alt="Icono check" />Análisis de motor</li>
        <li className="mb-1"><img className="mr-2" src="/images/icon-check.svg" alt="Icono check" />Aros gratis</li>
      </ul>
      <Button className="button --primary summary__button">LO QUIERO</Button>
    </div>
  );
};

export default Summary;
