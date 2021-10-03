import Button from "components/Button";
import { OrderDataContext } from "providers/Order/provider";
import { OrderState } from "providers/Order/reducer";
import { useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./styles.scss";

export const Summary = () => {
  const history = useHistory();
  const { cart } = useContext<OrderState>(OrderDataContext);
  const [total, setTotal] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);

  // Calculo de valor final a pagar mensualmente
  const calculatePriceMouths = useCallback(() => {
    const nextTotal: number = Number(process.env.REACT_APP_BASE_AMOUNT);
    let totalCoverage: number = 0;

    Object.keys(cart.coverageSelected).forEach((coverageIndex) => {
      totalCoverage +=
      Number(cart.totalCoverage) >
      Number(process.env.REACT_APP_TOP_EXONERATION) &&
      cart.coverageSelected[coverageIndex].exonerated
      ? 0
      : cart.coverageSelected[coverageIndex].price;
    });
    console.log(totalCoverage)
    setTotal(nextTotal + totalCoverage);
  }, [cart.coverageSelected, cart.totalCoverage]);

  useEffect(() => {
    calculatePriceMouths();
  }, [calculatePriceMouths, cart]);

  return (
    <div className="summary">
      <div className="sticky">
        <div className="summary__result d-mobile">
          <h6 className="summary__price">${total?.toFixed(2)}</h6>
          <span className="summary__mouths">MENSUAL</span>
        </div>

        <p className="summary__amount d-desktop">MONTO</p>
        <h6 className="summary__price d-desktop">
          ${total?.toFixed(2)}
        </h6>
        <span className="summary__mouths d-desktop">mensuales</span>
        <div className="summary__divider d-desktop"></div>
        <p className="summary__include mb-1 d-desktop">El precio incluye:</p>
        <ul className="summary__list mb-4 d-desktop">
          <li className="mb-1">
            <img
              className="mr-2"
              src="/images/icon-check.svg"
              alt="Icono check"
            />
            Llanta de respuesto
          </li>
          <li className="mb-1">
            <img
              className="mr-2"
              src="/images/icon-check.svg"
              alt="Icono check"
            />
            Análisis de motor
          </li>
          <li className="mb-1">
            <img
              className="mr-2"
              src="/images/icon-check.svg"
              alt="Icono check"
            />
            Aros gratis
          </li>
        </ul>
        <Button
          loading={loading}
          className="button --primary summary__button"
          onClick={() => {
            if (!loading) {
              setLoading(true);
              setTimeout(() => {
                history.push("/bienvenido");
              }, 2000);
            }
          }}
        >
          LO QUIERO
        </Button>
      </div>
    </div>
  );
};

export default Summary;
