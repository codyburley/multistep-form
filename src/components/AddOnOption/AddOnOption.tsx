import "./AddOnOption.scss";
import { ChangeEvent, useState } from "react";
import { UserData, AddOnData } from "../../types";

type AddOnsOptionsProps = AddOnData & {
  planType: "Monthly" | "Yearly";
  addOns: AddOnData[];
  updateFields: (fields: Partial<UserData>) => void;
};

const AddOnOption = ({
  title,
  description,
  monthlyPrice,
  yearlyPrice,
  addOns,
  planType,
  updateFields,
}: AddOnsOptionsProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(
    !!addOns.find((el) => el.title === title)
  );

  const addOnObj: AddOnData = {
    title,
    description,
    monthlyPrice,
    yearlyPrice,
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    const index = addOns.find((el) => el.title === title);
    if (!index)
      return updateFields({
        addOns: [...addOns, addOnObj],
      });
    return updateFields({
      addOns: addOns.filter((item) => item.title !== title),
    });
  };

  return (
    <label
      className={`addon-option ${isChecked ? " addon-option--active" : ""}`}
    >
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <span className="checkmark"></span>
      <div className="addon-option__wrapper">
        <h2 className="addon-option__title">{title}</h2>
        <span className="addon-option__description">{description}</span>
      </div>
      <span className="addon-option__price">
        ${planType === "Monthly" ? monthlyPrice : yearlyPrice}/
        {planType === "Monthly" ? "mo" : "yr"}
      </span>
    </label>
  );
};

export default AddOnOption;
