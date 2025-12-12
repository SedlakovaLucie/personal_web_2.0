import "./ErrorPage.scss";
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const { t } = useTranslation()

  return (
    <section className="error-wrapper">
      <div className="error">
        <p className="error-mark">!</p>
        <h1 className="error-h1">error 404</h1>
      </div>
      <p className="error-text">{t("error_page.error_text")}</p>
    </section>
  );
};

export default ErrorPage;
