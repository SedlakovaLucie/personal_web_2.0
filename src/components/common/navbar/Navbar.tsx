import "./Navbar.scss";
import ThemeToggle from "../themeToggle/ThemeToggle";
<<<<<<< HEAD
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
=======
import Logo from "../../../assets/images/common/Logo"
>>>>>>> 9a0b20a119c7c2d9c26af61a9850b3adf55b9cbe

const Navbar = () => {
  const { t, i18n } = useTranslation();

  return (
<<<<<<< HEAD
    <header className="navbar-container">
      <nav className="navbar">
        <div className="navbar-center">
          <NavLink to="/">Domů</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/career">Kariéra</NavLink>
          <NavLink to="/contact">Kontakt</NavLink>
=======
    <div className="navbar-container">
      <div className="navbar">
        <div>
          <Logo className={"logo"}/>          
>>>>>>> 9a0b20a119c7c2d9c26af61a9850b3adf55b9cbe
        </div>
        <div className="navbar-right">
          <ThemeToggle />
          <LanguageSwitcher
            selectedLang={i18n.language as "cs" | "en"}
            onChangeLanguage={(lang) => i18n.changeLanguage(lang)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
