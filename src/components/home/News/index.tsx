
import NewsCarousel from "../../common/carousels/NewsCarousel";
import { data } from "./data";
import { NewsHeader } from "./NewsHeader";
const News = () => {
  return (
    <section className="bg-[#e8ecf1] mt-10 mb-10 py-10 text-textPrimaryColor ">
      <div className="container">
        <NewsHeader />
        <div>
          <NewsCarousel data={data} />
        </div>
      </div>
    </section>
  );
};

export default News;
