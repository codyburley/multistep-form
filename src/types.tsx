export type UserData = {
  name: string;
  email: string;
  phoneNumber: string;
  planType: "Monthly" | "Yearly";
  plan: PlanData;
  addOns: AddOnData[];
};

export type AddOnData = {
  title: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
};

export type PlanData = {
  name: string;
  monthlyCost: number;
  yearlyCost: number;
};
