import { createContext, useReducer } from 'react';
import { ProvideProps } from 'types/global';
import OrderReducer, { OrderState } from './reducer';

export const OrderDataContext = createContext<OrderState | any>({});
export const OrderDispatchContext = createContext(null);

const initialState: OrderState = {
  car: undefined,
  cart: {
    totalCoverage: Number(process.env.REACT_APP_BASE_COVERAGE_AMOUNT),
    coverageSelected: {}
  }
}

const OrderProvider: React.FC<ProvideProps> = ({ children }: ProvideProps) => {
  const data: string | null = localStorage.getItem('order');
  const currentState:OrderState | any = data ? JSON.parse(String(data)) : initialState;

  const [OrderData, OrderDispatch]: any = useReducer(OrderReducer, currentState);
  return (
    <OrderDispatchContext.Provider value={OrderDispatch}>
      <OrderDataContext.Provider value={OrderData}>
        {children}
      </OrderDataContext.Provider>
    </OrderDispatchContext.Provider>
  );
};

export default OrderProvider;
