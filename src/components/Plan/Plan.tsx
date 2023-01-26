import React from "react";
import "./Plan.scss";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";
import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

type UserData = {
  plan: string;
  planType: string;
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

const Plan = ({ plan, planType, updateFields }: PlanFormProps) => {
  return (
    <div className="plan">
      <h1 className="plan__title">Select your plan</h1>
      <p className="plan__description">
        You have the option of monthly or yearly billing.
      </p>
      <div className="plan__container">
        <div className="plan__option">
          <img src={arcadeIcon} alt="Arcade" className="plan__icon" />
          <div className="plan__option-wrapper">
            <h2 className="plan__option-title">Arcade</h2>
            <span className="plan__price">$9/mo</span>
          </div>
        </div>
        <div className="plan__option">
          <img src={advancedIcon} alt="Arcade" className="plan__icon" />
          <div className="plan__option-wrapper">
            <h2 className="plan__option-title">Advanced</h2>
            <span className="plan__price">$12/mo</span>
          </div>
        </div>
        <div className="plan__option">
          <img src={proIcon} alt="Arcade" className="plan__icon" />
          <div className="plan__option-wrapper">
            <h2 className="plan__option-title">Pro</h2>
            <span className="plan__price">$15/mo</span>
          </div>
        </div>
      </div>
      <div className="plan__switch-container">
        <span className="plan__switch-label">Monthly</span>
        <AntSwitch inputProps={{ "aria-label": "ant design" }} />
        <span className="plan__switch-label">Yearly</span>
      </div>
    </div>
  );
};

export default Plan;
