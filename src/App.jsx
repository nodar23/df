import { Footer } from  "./components/Footer"
import { Header } from "./components/Header";
import { getUserInfoSelector } from "./redux/slices/userInfoSlice";
import { useSelector } from "react-redux";
import { Outlet, useLocation, Navigate } from "react-router-dom";

export const App = () => {
  const { token } = useSelector(getUserInfoSelector);
  const location = useLocation();

  if (!token) {
    if (location.pathname === "/") {
      return <Navigate to="/signup" />
    }
  }

  return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
}