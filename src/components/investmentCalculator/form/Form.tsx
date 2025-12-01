import { useState } from "react";
import "./Form.scss";
import InputCard from "./inputCard/InputCard";
import ResultCard from "./resultCard/ResultCard";

export type FormValues = {
  initial_investment: number;
  regular_investment: number;
  interest_rate: number;
  years: number;
};

const Form = () => {
  const [values, setValues] = useState<FormValues>({
    initial_investment: 100000,
    regular_investment: 1000,
    interest_rate: 10,
    years: 30,
  });

  const [result, setResult] = useState<number>(22407207);

  const handleFormChange = (field: keyof FormValues, newValue: number) => {
    setValues((prev) => ({
      ...prev,
      [field]: newValue,
    }));
  };

  // POZDĚJI FETCH NA BE
  const handleCalculate = async () => {
    console.log("Posílám na BE:", values);

    // zatím dummy výsledek
    setResult(22407207);
  };

  return (
    <div className="form-wrapper">
      <InputCard values={values} onChange={handleFormChange} />
      <ResultCard result={result} onCalculate={handleCalculate} />
    </div>
  );
};

export default Form;
