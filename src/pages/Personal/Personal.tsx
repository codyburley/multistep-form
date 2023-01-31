import "./Personal.scss";
import { UserData } from "../../types";

type PersonalFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const Personal = ({
  name,
  email,
  phoneNumber,
  updateFields,
}: PersonalFormProps) => {
  return (
    <div className="personal">
      <h1 className="personal__title">Personal Info</h1>
      <p className="personal__description">
        Please provide your name, email, address, and phone number.
      </p>
      <label className="personal__label">Name</label>
      <input
        className="personal__input"
        placeholder="e.g. Chuck Palahniuk"
        required
        type="text"
        value={name}
        onChange={(e) => updateFields({ name: e.target.value })}
      />
      <p className="personal__error"></p>
      <label className="personal__label">Email Address</label>
      <input
        className="personal__input"
        placeholder="e.g. chuckpalahniuk@lorem.com"
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <p className="personal__error"></p>
      <label className="personal__label">Phone Number</label>
      <input
        className="personal__input"
        placeholder="e.g. 123-456-7890"
        required
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        value={phoneNumber}
        onChange={(e) => updateFields({ phoneNumber: e.target.value })}
      />
      <p className="personal__error"></p>
    </div>
  );
};

export default Personal;
