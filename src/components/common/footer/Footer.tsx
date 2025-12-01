import "./Footer.scss";
<<<<<<< HEAD
=======
import Logo from "../../../assets/images/common/Logo";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
>>>>>>> 9a0b20a119c7c2d9c26af61a9850b3adf55b9cbe
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-container">
<<<<<<< HEAD
      <div></div>
=======
      <div className="footer-logo-wrapper">
        <Logo className="logo"/>
      </div>
>>>>>>> 9a0b20a119c7c2d9c26af61a9850b3adf55b9cbe

      <div className="footer-text">
        © {new Date().getFullYear()} {t("footer.text")}
      </div>

<<<<<<< HEAD
      <div>
        
=======
      <div className="footer-lang">
        <LanguageSwitcher
          selectedLang={i18n.language as "cs" | "en"}
          onChangeLanguage={(lang) => i18n.changeLanguage(lang)}
        />
>>>>>>> 9a0b20a119c7c2d9c26af61a9850b3adf55b9cbe
      </div>
    </div>
  );
};

export default Footer;
