import "./AddOns.scss";

type UserData = {
  addOns: string[];
};

type AddOnsFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const AddOns = ({ addOns, updateFields }: AddOnsFormProps) => {
  return <div></div>;
};

export default AddOns;
