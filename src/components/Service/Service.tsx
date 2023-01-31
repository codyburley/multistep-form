import "./Service.scss";

type ServiceProps = {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  planType: string;
};

const Service = ({
  name,
  monthlyPrice,
  yearlyPrice,
  planType,
}: ServiceProps) => {
  return (
    <div className="service">
      <span className="service__name">{name}</span>
      <span className="service__price">
        +${planType === "Monthly" ? monthlyPrice : yearlyPrice}/
        {planType === "Monthly" ? "mo" : "yr"}
      </span>
    </div>
  );
};

export default Service;
