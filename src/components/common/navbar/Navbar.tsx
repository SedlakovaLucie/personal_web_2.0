import "./Navbar.scss";
import ThemeToggle from "../themeToggle/ThemeToggle";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="navbar-center">
          <NavLink to="/">{t("navbar.home")}</NavLink>
          <NavLink to="/skills">{t("navbar.skills")}</NavLink>
          <NavLink to="/portfolio">{t("navbar.portfolio")}</NavLink>
          <NavLink to="/career">{t("navbar.career")}</NavLink>
          <NavLink to="/contact">{t("navbar.contact")}</NavLink>
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
