import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUser } from "@aws-amplify/auth";

const PrivateRoute = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    getCurrentUser()
      .then(() => setIsAuth(true))
      .catch(() => setIsAuth(false));
  }, []);

  if (isAuth === null) return <p>Loading...</p>;

  return isAuth ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
