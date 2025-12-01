import "./ResultCard.scss";
import ResultText from "./resultText/ResultText";
import ResultButton from "./resultButton/ResultButton";

type ResultCardProps = {
  result: number | null;
  onCalculate: () => void;
};

const ResultCard = ({ result, onCalculate }: ResultCardProps) => {
  return (
    <div className="result-card-wrapper">
      <div className="result-text">
        <ResultText result={result} />
      </div>
      <div className="result-button">
        <ResultButton onClick={onCalculate} />
      </div>
    </div>
  );
};

export default ResultCard;
