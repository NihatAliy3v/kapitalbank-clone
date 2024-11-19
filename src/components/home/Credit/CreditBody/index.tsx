import MainButtonLink from "../../../ui/MainButtonLink";

const creditDetails = [
  {
    title: "50 000 AZN-dək",
    subTitle: "Kredit məbləği",
  },
  {
    title: "59 ayadək",
    subTitle: "Kredit müddəti",
  },
  {
    title: "10.9%-dən",
    subTitle: "İllik faiz dərəcəsi",
  },
];
const CreditBody = () => {
  return (
    <div className="bg-[#e9ecf0] text-textPrimaryColor">
      <div className="container relative pl-[418px] py-[50px] pr-[15px]">
        <div className="absolute left-[-50px] bottom-[40px]">
          <img
            className="object-contain"
            src="https://www.kapitalbank.az/assets/static/img/main-page/daily-loan3.png"
            alt="Gundelik telebat krediti"
          />
        </div>
        <ul className="py-[20px] flex justify-between">
          {creditDetails.map((item) => (
            <li className="leading-[24px]">
              <span className="text-mainColor text-[28px] leading-[35px] mb-[5px] font-semibold block">
                {item.title}
              </span>
              {item.subTitle}
            </li>
          ))}
        </ul>
        <div className="flex justify-end">
          <MainButtonLink
            text="Sifariş et"
            url="/"
            width="w-[280px]"
            height="h-[55px]"
            bgColor="bg-mainColor"
            textColor="text-white"
            radius="rounded-lg"
            textSize="text-xl"
            hoverColor="bg-mainColorHover"
          />
        </div>
      </div>
    </div>
  );
};

export default CreditBody;
