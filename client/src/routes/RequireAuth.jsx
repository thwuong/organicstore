import { Navigate, useLocation } from "react-router-dom";

export default function RequiredAuth({ children }) {
  // load auth
  let auth = {
    user: false,
  };
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return children;
}
