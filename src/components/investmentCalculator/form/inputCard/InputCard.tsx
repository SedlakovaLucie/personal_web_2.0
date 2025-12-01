import "./InputCard.scss";
import InputField from "./inputField/InputField";
import { useTranslation } from "react-i18next";
import type { FormValues } from "../Form";

type InputCardProps = {
  values: FormValues;
  onChange: (field: keyof FormValues, value: number) => void;
};

const InputCard = ({ values, onChange }: InputCardProps) => {
  const { t } = useTranslation();

  const inputConfig: { key: keyof FormValues; step: number }[] = [
    {
      key: "initial_investment",
      step: 1000,
    },
    {
      key: "regular_investment",
      step: 1000,
    },
    {
      key: "interest_rate",
      step: 0.1,
    },
    {
      key: "years",
      step: 1,
    },
  ];

  return (
    <div className="input-card-wrapper">
      {inputConfig.map((input) => (
        <InputField
          key={input.key}
          translationKey={input.key}
          labelName={t(`main_page.calculator.inputs.${input.key}.label`)}
          tooltipText={t(`main_page.calculator.inputs.${input.key}.tooltip`)}
          value={values[input.key]}
          step={input.step}
          onChange={(val) => onChange(input.key, val)}
        />
      ))}
    </div>
  );
};

export default InputCard;
