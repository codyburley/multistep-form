import { FormEvent, useEffect, useState } from "react";
import "./Plan.scss";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";
import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

type UserData = {
  plan: string;
  planType: string;
  planCost: number;
};

type PlanFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 36,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "rgb(2, 41, 90)",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "rgb(2, 41, 90)",
    boxSizing: "border-box",
  },
}));

const Plan = ({ plan, planType, planCost, updateFields }: PlanFormProps) => {
  const [prices, setPrices] = useState<number[]>([9, 12, 15]);
  const handleClick = (option: string, price: number, e: FormEvent) => {
    e.preventDefault();
    updateFields({ plan: option, planCost: price });
  };

  const handleChange = () => {
    updateFields(
      planType === "Monthly"
        ? { planType: "Yearly", planCost: planCost * 10 }
        : { planType: "Monthly", planCost: planCost / 10 }
    );
  };

  useEffect(() => {
    if (planType === "Yearly") return setPrices([90, 120, 150]);
    setPrices([9, 12, 15]);
  }, [planType]);

  return (
    <div className="plan">
      <h1 className="plan__title">Select your plan</h1>
      <p className="plan__description">
        You have the option of monthly or yearly billing.
      </p>
      <div className="plan__container">
        <button
          onClick={(e) => handleClick("Arcade", prices[0], e)}
          className={`plan__option ${
            plan === "Arcade" ? "plan__option--active" : null
          }`}
        >
          <img src={arcadeIcon} alt="Arcade" className="plan__icon" />
          <div className="plan__option-wrapper">
            <h2 className="plan__option-title">Arcade</h2>
            <span className="plan__price">
              ${prices[0]}/{planType === "Monthly" ? "mo" : "yr"}
            </span>
            {planType === "Monthly" ? null : (
              <span className="plan__discount">2 months free</span>
            )}
          </div>
        </button>
        <button
          onClick={(e) => handleClick("Advanced", prices[1], e)}
          className={`plan__option ${
            plan === "Advanced" ? "plan__option--active" : null
          }`}
        >
          <img src={advancedIcon} alt="Advanced" className="plan__icon" />
          <div className="plan__option-wrapper">
            <h2 className="plan__option-title">Advanced</h2>
            <span className="plan__price">
              ${prices[1]}/{planType === "Monthly" ? "mo" : "yr"}
            </span>
            {planType === "Monthly" ? null : (
              <span className="plan__discount">2 months free</span>
            )}
          </div>
        </button>
        <button
          onClick={(e) => handleClick("Pro", prices[2], e)}
          className={`plan__option ${
            plan === "Pro" ? "plan__option--active" : null
          }`}
        >
          <img src={proIcon} alt="Pro" className="plan__icon" />
          <div className="plan__option-wrapper">
            <h2 className="plan__option-title">Pro</h2>
            <span className="plan__price">
              ${prices[2]}/{planType === "Monthly" ? "mo" : "yr"}
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
        <AntSwitch
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
