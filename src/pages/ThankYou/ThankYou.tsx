import "./ThankYou.scss";
import ThankYouIcon from "../../assets/images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <div className="thankyou">
      <img src={ThankYouIcon} alt="Check mark" className="thankyou__icon" />
      <h1 className="thankyou__title">Thank you!</h1>
      <p className="thankyou__copy">Thanks for confirming your subscription!</p>
      <p className="thankyou__copy thankyou__copy--bottom">
        We hope you enjoy using our platform. If you ever need support, please
        feel free to email us at support@example.com.
      </p>
    </div>
  );
};

export default ThankYou;
