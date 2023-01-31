import AddOnOption from "../../components/AddOnOption/AddOnOption";
import "./AddOns.scss";
import { v4 as uuidv4 } from "uuid";
import { UserData } from "../../types";
import { AddOnArray } from "../../constants";

type AddOnsFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const AddOns = ({ addOns, planType, updateFields }: AddOnsFormProps) => {
  return (
    <div className="addons">
      <h1 className="addons__title">Pick add-ons</h1>
      <p className="addons__description">
        Add-ons help enhance your gaming experience.
      </p>
      {AddOnArray?.map((addOn) => (
        <AddOnOption
          title={addOn.title}
          description={addOn.description}
          monthlyPrice={addOn.monthlyPrice}
          yearlyPrice={addOn.yearlyPrice}
          addOns={addOns}
          planType={planType}
          updateFields={updateFields}
          key={uuidv4()}
        />
      ))}
    </div>
  );
};

export default AddOns;
