import { useEffect, useState } from "react";
import "./InputField.scss";
import { useTranslation } from "react-i18next";

type InputFieldProps = {
  labelName: string;
  translationKey: string;
  step: number;
  tooltipText: string;
  value: number;
  onChange: (value: number) => void;
};

const formatNumber = (num: number) => num.toLocaleString("cs-CZ");

const InputField = ({
  labelName,
  translationKey,
  step,
  tooltipText,
  value,
  onChange,
}: InputFieldProps) => {
  const { t } = useTranslation();

  const [text, setText] = useState(formatNumber(value));

  // když rodič změní value (tlačítka + / -), přepiš text
  useEffect(() => {
    setText(formatNumber(value));
  }, [value]);

  const suffixLabel = t(
    `main_page.calculator.inputs.${translationKey}.suffix`,
    { count: value }
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setText(newText);

    // převod "10,5" -> "10.5"
    const normalized = newText.replace(/\s/g, "").replace(",", ".");

    const num = Number(normalized);
    if (!isNaN(num)) {
      onChange(num);
    }
  };

  const handleBlur = () => {
    // po vykliknutí z inputu přeformátovat
    setText(formatNumber(value));
  };

  const handleIncrease = () => {
    onChange(Number((value + step).toFixed(10)));
  };

  const handleDecrease = () => {
    const next = value - step;
    onChange(next < 0 ? 0 : Number(next.toFixed(10)));
  };

  return (
    <div className="input-field">
      <div className="input-label">
        <div className="info-icon-wrapper">
          <div className="info-icon">i</div>
          <div className="tooltip">{tooltipText}</div>
        </div>
        <p>{labelName}</p>
      </div>

      <div className="input-box">
        <button className="round-button" onClick={handleDecrease}>
          −
        </button>

        <div className="value-wrapper">
          <input
            className="value-input"
            value={text}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <span className="value-suffix">{suffixLabel}</span>
        </div>

        <button className="round-button" onClick={handleIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default InputField;
