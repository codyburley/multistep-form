import "./Summary.scss";
import Service from "../../components/Service/Service";
import { v4 as uuidv4 } from "uuid";
import { UserData } from "../../types";
import { FormEvent } from "react";

const Summary = ({ plan, planType, addOns }: UserData) => {
  const calculateTotal = (planType: string): number => {
    let addOnTotal: number;
    let planCost: number;
    if (planType === "Monthly") {
      addOnTotal = addOns.reduce(
        (partialSum, acc) => partialSum + acc.monthlyPrice,
        0
      );
      planCost = plan.monthlyCost;
    } else {
      addOnTotal = addOns.reduce(
        (partialSum, acc) => partialSum + acc.yearlyPrice,
        0
      );
      planCost = plan.yearlyCost;
    }
    return addOnTotal + planCost;
  };

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    // goTo go here
  };

  return (
    <div className="summary">
      <h1 className="summary__title">Finishing up</h1>
      <p className="summary__description">
        Double-check everything looks OK before confirming.
      </p>
      <div className="summary__breakdown">
        <div className="summary__container">
          <div className="summary__wrapper">
            <span className="summary__plan">
              {plan.name} ({planType})
            </span>
            <button className="summary__button" onClick={(e) => handleClick(e)}>
              Change
            </button>
          </div>
          <span className="summary__price">
            ${planType === "Monthly" ? plan.monthlyCost : plan.yearlyCost}/
            {planType === "Monthly" ? "mo" : "yr"}
          </span>
        </div>
        {addOns.map((addOn) => (
          <Service
            name={addOn.title}
            monthlyPrice={addOn.monthlyPrice}
            yearlyPrice={addOn.yearlyPrice}
            planType={planType}
            key={uuidv4()}
          />
        ))}
      </div>
      <div className="summary__total-container">
        <span className="summary__total-label">
          Total (per {planType === "Monthly" ? "month" : "year"})
        </span>
        <span className="summary__total-amount">
          ${calculateTotal(planType)}/{planType === "Monthly" ? "mo" : "yr"}
        </span>
      </div>
    </div>
  );
};

export default Summary;
