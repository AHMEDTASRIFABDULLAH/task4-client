import { useContext } from "react";
import { AuthContext } from "../Hooks/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isUser } = useContext(AuthContext);

  if (isUser === true) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
