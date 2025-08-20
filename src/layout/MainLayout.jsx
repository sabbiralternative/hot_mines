import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { useEffect } from "react";

const MainLayout = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { mutate: handleAuth } = useAuth();

  useEffect(() => {
    let intervalId;

    if (token) {
      const getUser = async () => {
        handleAuth(token);
      };

      getUser();

      intervalId = setInterval(() => {
        getUser();
      }, 30000);
    }

    return () => clearInterval(intervalId);
  }, [token, handleAuth, dispatch]);
  return <Outlet />;
};

export default MainLayout;
