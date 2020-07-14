import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = RouteComponent => {
  const Route = () => {
    const isLogged = useSelector(state => state.auth.isLogged);

    return isLogged ? <RouteComponent /> : <Redirect to="/" />;
  };

  return Route;
};
export default PrivateRoute;
