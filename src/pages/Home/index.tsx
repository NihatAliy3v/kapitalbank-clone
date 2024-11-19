import Booking from "../../components/home/Booking";
import CardCollection from "../../components/home/CardCollection";
import Credit from "../../components/home/Credit";
import Main from "../../components/home/Main";

const Home = () => {
  return (
    <div className="h-[1900px]">
      <Main/>
      <Booking />
      <CardCollection />
      <Credit/>
    </div>
  );
};

export default Home;
