import "./StepCounter.scss";

const StepCounter = (props: { currentStepIndex: number }) => {
  const { currentStepIndex } = props;
  const stepLabels: string[] = [
    "YOUR INFO",
    "SELECT PLAN",
    "ADD-ONS",
    "SUMMARY",
  ];

  return (
    <div className="step-counter">
      {stepLabels.map((s) => {
        return (
          <div key={stepLabels.indexOf(s)} className="step-counter__container">
            <div
              className={`step-counter__number ${
                currentStepIndex === stepLabels.indexOf(s)
                  ? " step-counter__number--active"
                  : ""
              }`}
            >
              {stepLabels.indexOf(s) + 1}
            </div>
            <div className="step-counter__wrapper">
              <span className="step-counter__step">
                STEP {stepLabels.indexOf(s) + 1}
              </span>
              <span className="step-counter__title">
                {stepLabels[stepLabels.indexOf(s)]}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepCounter;
