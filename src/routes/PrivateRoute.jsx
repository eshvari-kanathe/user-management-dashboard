import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PrivateRoute;
