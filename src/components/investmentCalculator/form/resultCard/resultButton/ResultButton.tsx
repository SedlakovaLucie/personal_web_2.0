import "./ResultButton.scss";
import { useTranslation } from "react-i18next";

type ResultButtonProps = {
  onClick: () => void;
};

const ResultButton = ({ onClick }: ResultButtonProps) => {
  const { t } = useTranslation();

  return (
    <button className="result-button-wrapper" onClick={onClick}>
      {t("main_page.calculator.result_button")}
    </button>
  );
};

export default ResultButton;
