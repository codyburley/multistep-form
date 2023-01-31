import { FormEvent } from "react";
import { PlanData, UserData } from "../../types";

type PlanButtonProps = {
  plan: PlanData;
  planType: "Monthly" | "Yearly";
  planChoice: PlanData;
  icon: string;
  updateFields: (fields: Partial<UserData>) => void;
};

const PlanButton = ({
  plan,
  planType,
  planChoice,
  icon,
  updateFields,
}: PlanButtonProps) => {
  const handleClick = (option: PlanData, e: FormEvent) => {
    e.preventDefault();
    updateFields({ plan: option });
  };

  return (
    <button
      onClick={(e) => handleClick(planChoice, e)}
      className={`plan__option ${
        plan.name === planChoice.name ? "plan__option--active" : null
      }`}
    >
      <img src={icon} alt="Arcade" className="plan__icon" />
      <div className="plan__option-wrapper">
        <h2 className="plan__option-title">{planChoice.name}</h2>
        <span className="plan__price">
          $
          {planType === "Monthly"
            ? planChoice.monthlyCost
            : planChoice.yearlyCost}
          /{planType === "Monthly" ? "mo" : "yr"}
        </span>
        {planType === "Monthly" ? null : (
          <span className="plan__discount">2 months free</span>
        )}
      </div>
    </button>
  );
};

export default PlanButton;
