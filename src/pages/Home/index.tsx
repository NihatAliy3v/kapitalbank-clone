import React from "react";
import Booking from "../../components/home/Booking";
import Calculator from "../../components/home/Calculator";
import CardCollection from "../../components/home/CardCollection";
import Credit from "../../components/home/Credit";
import Main from "../../components/home/Main";
import News from "../../components/home/News";
import OnlineCredit from "../../components/home/OnlineCredit";

const Home: React.FC = () => {
  return (
    <div>
      <Main />
      <Booking />
      <CardCollection />
      <Credit />
      <Calculator />
      <OnlineCredit />
      <News />
    </div>
  );
};

export default Home;
