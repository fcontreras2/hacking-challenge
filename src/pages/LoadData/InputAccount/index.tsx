import useOrderActions from 'providers/Order/actions';
import { OrderDataContext } from 'providers/Order/provider';
import { OrderState } from 'providers/Order/reducer';
import { useCallback, useContext } from 'react';
import './styles.scss';

const InputAccount = () => {
  const { cart } = useContext<OrderState>(OrderDataContext);
  const { totalCoverageUpdate } = useOrderActions();
  const clickUpdate = useCallback((amount: number) => {
    const nextValue = Number(cart.totalCoverage) + amount;
    if (Number(process.env.REACT_APP_MIN_COVERAGE_AMOUNT) <= nextValue  && Number(process.env.REACT_APP_MAX_COVERAGE_AMOUNT) >= Number(nextValue) )
    totalCoverageUpdate(nextValue);
  }, [cart.totalCoverage, totalCoverageUpdate])
 
  return (
    <div className="account">
      <div className="account__info">
        <p>Indica la suma asegurada</p>
        <div className="account__range">
          <span>MIN ${Number(process.env.REACT_APP_MIN_COVERAGE_AMOUNT).toLocaleString('en-US')}</span>
          <span className="ml-1 mr-1 divider"></span>
          <span>MAX ${Number(process.env.REACT_APP_MAX_COVERAGE_AMOUNT).toLocaleString('en-US')}</span>
        </div>
      </div>
      <div className="account__input">
        <button><img src="/images/icon-subtraction.svg" alt="Resta" onClick={() => clickUpdate(-100)} ></img></button>
        <span>$ {Number(cart.totalCoverage).toLocaleString('es-US')}</span>
        <button><img src="/images/icon-plus.svg" alt="Sumar" onClick={() => clickUpdate(100)}></img></button>
      </div>
    </div>
  );
};

export default InputAccount;
