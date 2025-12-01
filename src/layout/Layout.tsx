import { Outlet } from "react-router-dom";
import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/footer/Footer";
import "./Layout.scss"

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
