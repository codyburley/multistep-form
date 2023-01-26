import "./App.scss";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { useState, FormEvent } from "react";
import Personal from "./components/Personal/Personal";
import Plan from "./components/Plan/Plan";
import AddOns from "./components/AddOns/AddOns";
import StepCounter from "./components/StepCounter/StepCounter";
import Summary from "./components/Summary/Summary";

type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  plan: string;
  planType: string;
  addOns: string[];
  cost: number;
};

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  phoneNumber: "",
  plan: "Arcade",
  planType: "Monthly",
  addOns: [""],
  cost: 9,
};

const App = () => {
  const [data, setData] = useState<FormData>(INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful account creation");
  };

  const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <Personal {...data} updateFields={updateFields} />,
      <Plan {...data} updateFields={updateFields} />,
      <AddOns {...data} updateFields={updateFields} />,
      <Summary />,
    ]);
  return (
    <div className="App">
      <StepCounter steps={steps} currentStepIndex={currentStepIndex} />
      <form className="App__form" onSubmit={onSubmit}>
        <div className="App__component">{step}</div>
        <div className="App__button-container">
          {!isFirstStep && (
            <button
              type="button"
              onClick={back}
              className="App__button App__button--back"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className={`App__button ${
              isLastStep ? "App__button--confirm" : "App__button--next"
            }`}
          >
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
