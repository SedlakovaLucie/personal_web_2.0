import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SkillsPage from "./pages/SkillsPage";
import PortfolioPage from "./pages/PortfolioPage";
import CarrerPage from "./pages/CarrerPage";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/career" element={<CarrerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
