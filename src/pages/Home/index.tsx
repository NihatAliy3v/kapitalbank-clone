import Booking from "../../components/home/Booking";
import CardCollection from "../../components/home/CardCollection";
import Main from "../../components/home/Main";

const Home = () => {
  return (
    <div className="h-[1500px]">
      <Main/>
      <Booking />
      <CardCollection />
    </div>
  );
};

export default Home;
