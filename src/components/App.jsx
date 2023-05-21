import React from "react";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from './AppRoutes';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
import { ThreeDots } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ?
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="pink"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
    :
    <AppRoutes />;
};

export default App;
