import './styles.scss';

const InputAccount = () => {
  return (
    <div className="account">
      <div className="account__info">
        <p>Indica la suma asegurada</p>
        <div className="account__range">
          <span>MIN $12,500</span>
          <span className="ml-1 mr-1 divider"></span>
          <span>MAX $16,500</span>
        </div>
      </div>
      <div className="account__input">
        <button><img src="/images/icon-subtraction.svg" alt="Resta" ></img></button>
        <span>$ 14,300</span>
        <button><img src="/images/icon-plus.svg" alt="Sumar" ></img></button>
      </div>
    </div>
  );
};

export default InputAccount;
