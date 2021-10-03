/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect } from 'react';

import { OrderState } from 'providers/Order/reducer';
import { OrderDataContext } from 'providers/Order/provider';

/**
 * HOC que permite almacenar en la Cookie la data
 * referente a la orden del usuario
 */
const ListenerProvider = () => (Component:any) => (props:any) => {
  const order = useContext<OrderState>(OrderDataContext);

  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(order));
  }, [order]);

  return <Component {...props} />;
};

export default ListenerProvider;
