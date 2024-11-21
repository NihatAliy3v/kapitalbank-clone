import ArrowButtonLink from "../../../ui/ArrowButtonLink";

const content = {
  title: "Onlayn kredit",
  desctiption: "Banka gəlmədən və növbələrdə vaxt itirmədən kredit əldə et.",
};

const CreditBook = () => {
  return (
    <div className="relative w-1/2 py-[40px] h-[300px] bg-[#e8ecf1] text-textPrimaryColor flex justify-end rounded-tr-lg rounded-br-lg">
      <div className="w-[586px]">
        <div className="h-full flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold leading-[54px]">
              {content.title}
            </h2>
            <p className="text-sm max-w-[255px] leading-[21px]">
              {content.desctiption}
            </p>
          </div>
          <ArrowButtonLink
            text="Sifariş et"
            url="/"
            width="w-fit"
            height="h-auto"
            bgColor=""
            textColor="text-[#f45369]"
            radius="none"
            textSize="text-base"
            hoverColor="hover:text-[#830036]"
            fontWeight="font-extralight"
          />
        </div>

        <div className="absolute bottom-0 right-0 pr-[80px] mr-[15px]">
          <img
            className="w-[200px]"
            src="https://www.kapitalbank.az/assets/static/img/content/elements/png/webp/cashPayment.webp"
            alt="Onlayn kredit"
          />
        </div>
      </div>
    </div>
  );
};

export default CreditBook;
