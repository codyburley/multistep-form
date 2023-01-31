import { AddOnData, PlanData } from "./types";

export const ArcadePlan: PlanData = {
  name: "Arcade",
  monthlyCost: 9,
  yearlyCost: 90,
} as const;

export const AdvancedPlan: PlanData = {
  name: "Advanced",
  monthlyCost: 12,
  yearlyCost: 120,
} as const;

export const ProPlan: PlanData = {
  name: "Pro",
  monthlyCost: 15,
  yearlyCost: 150,
} as const;

export const AddOnArray: AddOnData[] = [
  {
    title: "Online Service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    title: "Larger Storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];
