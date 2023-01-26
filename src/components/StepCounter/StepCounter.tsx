import { ReactElement } from "react";
import "./StepCounter.scss";

const StepCounter = (props: {
  currentStepIndex: number;
  steps: ReactElement[];
}) => {
  const { currentStepIndex, steps } = props;

  return (
    <div className="step-counter">
      {steps.map((s) => {
        return (
          <div
            className={`step-counter__number ${
              currentStepIndex === steps.indexOf(s)
                ? " step-counter__number--active"
                : ""
            }`}
          >
            {steps.indexOf(s) + 1}
          </div>
        );
      })}
    </div>
  );
};

export default StepCounter;
