import Hiring from "./Hiring";
import CreditBook from "./CreditBook";

const OnlineCredit = () => {
  return (
    <section className="mt-[60px]">
      <div className="flex gap-[15px] relative">
        <CreditBook />
        <Hiring />
      </div>
    </section>
  );
};

export default OnlineCredit;
