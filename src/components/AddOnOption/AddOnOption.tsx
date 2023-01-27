import "./AddOnOption.scss";
import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type UserData = {
  addOns: string[];
  planType: string;
};

type ServiceData = {
  title: string;
  description: string;
  price: number;
};

type AddOnsOptionsProps = ServiceData &
  UserData & {
    updateFields: (fields: Partial<UserData>) => void;
  };

const AddOnOption = ({
  title,
  description,
  price,
  addOns,
  planType,
  updateFields,
}: AddOnsOptionsProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    const index: number = addOns.findIndex((el) => el === title);
    if (index === -1) return updateFields({ addOns: [...addOns, title] });
    return updateFields({ addOns: addOns.filter((item) => item !== title) });
  };

  return (
    <label
      className={`addon-option ${isChecked ? " addon-option--active" : ""}`}
      key={uuidv4()}
    >
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <span className="checkmark"></span>
      <div className="addon-option__wrapper">
        <h2 className="addon-option__title">{title}</h2>
        <span className="addon-option__description">{description}</span>
      </div>
      <span className="addon-option__price">
        ${price}/{planType === "Monthly" ? "mo" : "yr"}
      </span>
    </label>
  );
};

export default AddOnOption;
