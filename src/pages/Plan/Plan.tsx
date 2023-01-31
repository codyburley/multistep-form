import { FormEvent } from "react";
import "./Plan.scss";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";
import { UserData, PlanData } from "../../types";
import { ArcadePlan, AdvancedPlan, ProPlan } from "../../constants";
import { FrequencySwitch } from "../../components/FrequencySwitch/FrequencySwitch";

type PlanFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const Plan = ({ plan, planType, updateFields }: PlanFormProps) => {
  const handleClick = (option: PlanData, e: FormEvent) => {
    e.preventDefault();
    updateFields({ plan: option });
  };

  const handleChange = () => {
    updateFields(
      planType === "Monthly" ? { planType: "Yearly" } : { planType: "Monthly" }
    );
  };

  return (
    <div className="plan">
      <h1 className="plan__title">Select your plan</h1>
      <p className="plan__description">
        You have the option of monthly or yearly billing.
      </p>
      <div className="plan__container">
        <button
          onClick={(e) => handleClick(ArcadePlan, e)}
          className={`plan__option ${
            plan.name === "Arcade" ? "plan__option--active" : null
          }`}
        >
          <img src={arcadeIcon} alt="Arcade" className="plan__icon" />
          <div className="plan__option-wrapper">
            <h2 className="plan__option-title">Arcade</h2>
            <span className="plan__price">
              $
              {planType === "Monthly"
                ? ArcadePlan.monthlyCost
                : ArcadePlan.yearlyCost}
              /{planType === "Monthly" ? "mo" : "yr"}
            </span>
            {planType === "Monthly" ? null : (
              <span className="plan__discount">2 months free</span>
            )}
          </div>
        </button>
        <button
          onClick={(e) => handleClick(AdvancedPlan, e)}
          className={`plan__option ${
            plan.name === "Advanced" ? "plan__option--active" : null
          }`}
        >
          <img src={advancedIcon} alt="Advanced" className="plan__icon" />
          <div className="plan__option-wrapper">
            <h2 className="plan__option-title">Advanced</h2>
            <span className="plan__price">
              $
              {planType === "Monthly"
                ? AdvancedPlan.monthlyCost
                : AdvancedPlan.yearlyCost}
              /{planType === "Monthly" ? "mo" : "yr"}
            </span>
            {planType === "Monthly" ? null : (
              <span className="plan__discount">2 months free</span>
            )}
          </div>
        </button>
        <button
          onClick={(e) => handleClick(ProPlan, e)}
          className={`plan__option ${
            plan.name === "Pro" ? "plan__option--active" : null
          }`}
        >
          <img src={proIcon} alt="Pro" className="plan__icon" />
          <div className="plan__option-wrapper">
            <h2 className="plan__option-title">Pro</h2>
            <span className="plan__price">
              $
              {planType === "Monthly"
                ? ProPlan.monthlyCost
                : ProPlan.yearlyCost}
              /{planType === "Monthly" ? "mo" : "yr"}
            </span>
            {planType === "Monthly" ? null : (
              <span className="plan__discount">2 months free</span>
            )}
          </div>
        </button>
      </div>
      <div className="plan__switch-container">
        <span
          className={`plan__switch-label ${
            planType === "Monthly" ? "plan__switch-label--active" : null
          }`}
        >
          Monthly
        </span>
        <FrequencySwitch
          inputProps={{ "aria-label": "ant design" }}
          onChange={handleChange}
          checked={planType === "Yearly" ? true : false}
        />
        <span
          className={`plan__switch-label ${
            planType === "Yearly" ? "plan__switch-label--active" : null
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
};

export default Plan;
