import Button from "components/Button";
import { useHistory } from "react-router";
import "./styles.scss";

export const Summary = () => {
  const history = useHistory();
  
  return (
    <div className="summary">
      <div className="summary__result d-mobile">
        <h6 className="summary__price">$35.00</h6>
        <span className="summary__mouths">MENSUAL</span>
      </div>
      
      <p className="summary__amount d-desktop">MONTO</p>
      <h6 className="summary__price d-desktop">$35.00</h6>
      <span className="summary__mouths d-desktop">mensuales</span>
      <div className="summary__divider d-desktop"></div>
      <p className="summary__include mb-1 d-desktop">El precio incluye:</p>
      <ul className="summary__list mb-4 d-desktop">
        <li className="mb-1"><img className="mr-2" src="/images/icon-check.svg" alt="Icono check" />Llanta de respuesto</li>
        <li className="mb-1"><img className="mr-2" src="/images/icon-check.svg" alt="Icono check" />Análisis de motor</li>
        <li className="mb-1"><img className="mr-2" src="/images/icon-check.svg" alt="Icono check" />Aros gratis</li>
      </ul>
      <Button className="button --primary summary__button" onClick={() => {history.push('/bienvenido')}}>LO QUIERO</Button>
    </div>
  );
};

export default Summary;
