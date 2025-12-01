import "./ResultText.scss";
import { useTranslation } from "react-i18next";

type ResultTextProps = {
  result: number | null;
};

const formatNumber = (num: number) => {
  return num.toLocaleString("cs-CZ");
};

const ResultText = ({ result }: ResultTextProps) => {
  const { t } = useTranslation();

  return (
    <div className="result-text-wrapper">
      <p>{t("main_page.calculator.result_text")}</p>
      <p>{result !== null ? `${formatNumber(result)} Kč` : "—"}</p>
    </div>
  );
};

export default ResultText;
