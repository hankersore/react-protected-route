import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoutes = () => {
  const { auth } = useAuth();

  return (
    <div>
      {auth ? <Outlet /> : <Navigate to="/login" />}
    </div>
  );
}

export default PrivateRoutes;