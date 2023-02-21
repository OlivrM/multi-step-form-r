import thankYou from '../assets/images/icon-thank-you.svg';

const Last = () => {
  return (
    <div className="text-center py-5">
      <img
        src={thankYou}
        alt="confirmation check mark"
        className="w-25 mb-3 p-4"
      />
      <h2 className="text-primary mb-4 fw-bold">Thank you!</h2>
      <p className="text-secondary">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Last;
