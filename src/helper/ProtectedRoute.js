import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UniversityContext from "../context/UniversityContext";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(UniversityContext);

  if (!isLoggedIn) {
    return <Navigate to={"/signin"} replace />;
  }

  return children;
}

export default ProtectedRoute;
