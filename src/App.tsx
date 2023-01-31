import "./App.scss";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { useState, FormEvent } from "react";
import Personal from "./pages/Personal/Personal";
import Plan from "./pages/Plan/Plan";
import AddOns from "./pages/AddOns/AddOns";
import StepCounter from "./components/StepCounter/StepCounter";
import Summary from "./pages/Summary/Summary";
import { UserData } from "./types";
import { ArcadePlan } from "./constants";
import { Routes, Route, useNavigate } from "react-router-dom";
import ThankYou from "./pages/ThankYou/ThankYou";

const INITIAL_DATA: UserData = {
  name: "",
  email: "",
  phoneNumber: "",
  planType: "Monthly",
  plan: ArcadePlan,
  addOns: [],
};

const App = () => {
  const [data, setData] = useState<UserData>(INITIAL_DATA);
  const navigate = useNavigate();

  const updateFields = (fields: Partial<UserData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log(data);
    navigate("/thank-you");
  };

  const { step, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <Personal {...data} updateFields={updateFields} />,
      <Plan {...data} updateFields={updateFields} />,
      <AddOns {...data} updateFields={updateFields} />,
      <Summary {...data} />,
    ]);

  return (
    <div className="App">
      <div className="App__wrapper">
        <div className="App__step-container">
          <StepCounter currentStepIndex={currentStepIndex} />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <form className="App__form" onSubmit={onSubmit}>
                <div className="App__component">{step}</div>
                <div className="App__button-container">
                  {!isFirstStep && (
                    <button
                      type="button"
                      onClick={back}
                      className="App__button App__button--back"
                    >
                      Go Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className={`App__button ${
                      isLastStep ? "App__button--confirm" : "App__button--next"
                    }`}
                  >
                    {isLastStep ? "Confirm" : "Next"}
                  </button>
                </div>
              </form>
            }
          />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
