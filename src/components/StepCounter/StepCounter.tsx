import { ReactElement } from "react";
import "./StepCounter.scss";

const StepCounter = (props: {
  currentStepIndex: number;
  steps: ReactElement[];
}) => {
  const { currentStepIndex, steps } = props;
  const stepLabels: string[] = [
    "YOUR INFO",
    "SELECT PLAN",
    "ADD-ONS",
    "SUMMARY",
  ];

  return (
    <div className="step-counter">
      {steps.map((s) => {
        return (
          <div key={steps.indexOf(s)} className="step-counter__container">
            <div
              className={`step-counter__number ${
                currentStepIndex === steps.indexOf(s)
                  ? " step-counter__number--active"
                  : ""
              }`}
            >
              {steps.indexOf(s) + 1}
            </div>
            <div className="step-counter__wrapper">
              <span className="step-counter__step">
                STEP {steps.indexOf(s) + 1}
              </span>
              <span className="step-counter__title">
                {stepLabels[steps.indexOf(s)]}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepCounter;
