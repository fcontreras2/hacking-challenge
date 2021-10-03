import { OrderDataContext } from 'providers/Order/provider';
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { RoutePage } from 'types/global';
import ListenerProvider from './ListenerProvider';

const RouterOutlet = (route: RoutePage) => {

  const { car } = useContext(OrderDataContext);
  const render = (props: any) => {
    
    const component = (
      <route.component
        {...props}
        config={route}
      />
    );

    if (route.protected && !car) {
      return <Redirect to={{ pathname: '/' }} />;
    } 
    
    return component;
  };

  const routeProps = {
    path: route.path,
    render,
  };

  return <Route {...routeProps} />
}

export default ListenerProvider()(RouterOutlet);