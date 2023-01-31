import "./Plan.scss";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";
import { UserData } from "../../types";
import { ArcadePlan, AdvancedPlan, ProPlan } from "../../constants";
import { FrequencySwitch } from "../../components/FrequencySwitch/FrequencySwitch";
import PlanButton from "../../components/PlanButton/PlanButton";

type PlanFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const Plan = ({ plan, planType, updateFields }: PlanFormProps) => {
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
        <PlanButton
          plan={plan}
          planType={planType}
          planChoice={ArcadePlan}
          icon={arcadeIcon}
          updateFields={updateFields}
        />
        <PlanButton
          plan={plan}
          planType={planType}
          planChoice={AdvancedPlan}
          icon={advancedIcon}
          updateFields={updateFields}
        />
        <PlanButton
          plan={plan}
          planType={planType}
          planChoice={ProPlan}
          icon={proIcon}
          updateFields={updateFields}
        />
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
