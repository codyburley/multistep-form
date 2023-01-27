import { useEffect, useState } from "react";
import AddOnOption from "../AddOnOption/AddOnOption";
import "./AddOns.scss";
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

type AddOnsFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const AddOns = ({ addOns, planType, updateFields }: AddOnsFormProps) => {
  const [services, setServices] = useState<ServiceData[]>();

  useEffect(() => {
    if (planType === "Monthly")
      return setServices([
        {
          title: "Online Service",
          description: "Access to multiplayer games",
          price: 1,
        },
        {
          title: "Larger Storage",
          description: "Extra 1TB of cloud save",
          price: 2,
        },
        {
          title: "Customizable Profile",
          description: "Custom theme on your profile",
          price: 2,
        },
      ]);
    setServices([
      {
        title: "Online Service",
        description: "Access to multiplayer games",
        price: 10,
      },
      {
        title: "Larger Storage",
        description: "Extra 1TB of cloud save",
        price: 20,
      },
      {
        title: "Customizable Profile",
        description: "Custom theme on your profile",
        price: 20,
      },
    ]);
  }, []);

  return (
    <div className="addons">
      <h1 className="addons__title">Pick add-ons</h1>
      <p className="addons__description">
        Add-ons help enhance your gaming experience.
      </p>
      {services?.map((service) => (
        <AddOnOption
          title={service.title}
          description={service.description}
          price={service.price}
          addOns={addOns}
          planType={planType}
          updateFields={updateFields}
        />
      ))}
    </div>
  );
};

export default AddOns;
