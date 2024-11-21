import ArrowButtonLink from "../../../ui/ArrowButtonLink";

const content = {
  title: "İnsan resursları",
  description: `Kapital Bankın peşəkarlar komandasına qoşulmaq istəyirsinizsə, Sizi
          müvafiq vakansiyaya müraciət etməyə dəvət edirik. Biz sizə dinamik
          mühitdə maraqlı və perspektivli iş təklif edirik.`,
};

const Hiring = () => {
  return (
    <div className="w-1/2  h-[300px] bg-[#ef3e42] rounded-tl-lg rounded-bl-lg text-white">
      <div className="max-w-[586px] h-full relative py-[40px] pl-[80px]">
        <div className="h-full flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold leading-[54px]">
              {content.title}
            </h2>
            <p className="text-sm max-w-[255px] leading-[21px]">
              {content.description}
            </p>
          </div>
          <ArrowButtonLink
            text="Sifariş et"
            url="/"
            width="w-fit"
            height="h-auto"
            bgColor=""
            textColor="text-white"
            radius="none"
            textSize="text-base"
            hoverColor="hover:text-white"
            fontWeight="font-extralight"
          />
        </div>

        <div className="absolute bottom-0 right-0 pr-[15px]">
          <img
            className="w-[200px]"
            src="https://www.kapitalbank.az/assets/static/img/content/elements/png/webp/90789318742-min.webp"
            alt="Insan resurlari"
          />
        </div>
      </div>
    </div>
  );
};

export default Hiring;
