import Booking from "../../components/home/Booking";
import Calculator from "../../components/home/Calculator";
import CardCollection from "../../components/home/CardCollection";
import Credit from "../../components/home/Credit";
import Main from "../../components/home/Main";
import OnlineCredit from "../../components/home/OnlineCredit";

const Home = () => {
  return (
    <div className="h-[2900px]">
      <Main />
      <Booking />
      <CardCollection />
      <Credit />
      <Calculator/>
      <OnlineCredit />
    </div>
  );
};

export default Home;
