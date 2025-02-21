import { useState } from "react";
import RangeSlider from "../../../../ui/RangeSlider";
import { Link } from "react-router-dom";
import MainButtonLink from "../../../../ui/MainButtonLink";

export const CreditTab = () => {
  const [amount, setAmount] = useState(10000);
  const [percent, setPercent] = useState(15);
  const [time, setTime] = useState(3);

  const calculateMonthlyPayment = (principal, rate, term) => {
    const monthlyRate = rate / 100 / 12;
    return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));
  };

  const monthlyPayment = calculateMonthlyPayment(amount, percent, time).toFixed(
    2
  );
  console.log(monthlyPayment);
  return (
    <div className="flex justify-between text-textPrimaryColor">
      <div className="w-[58.33%] px-4">
        <h3 className="text-2xl mb-[10px] leading-[45px]">Nağd pul krediti</h3>
        <div>
          <p className="text-lg mb-[16px] leading-[27px]">
            Siz müştərilərimizə asanlıqla əldə edə biləcəyiniz nağd kredit
            təklif edirik.
          </p>
          % dərəcəsi rəsmiləşmə zamanı müəyyən olunacaq
          <div className="flex flex-col  mt-[35px]">
            <div className="relative pt-[24px] px-[20px] pb-[12px] border rounded-lg border-b-0 border-[#d4d4d4]">
              <span className="absolute text-xs font-semibold top-[8px] left-[20px] text-[#bdc3c7]">
                Məbləğ
              </span>
              {amount}
            </div>
            <div className="flex flex-col">
              <RangeSlider
                values={[amount]}
                setValues={setAmount}
                isStep={false}
                min={300}
                max={50000}
                step={100}
              />
              <div className="flex justify-between mt-[10px] text-textPrimaryColor text-sm font-thin">
                <span>300</span>
                <span>50 000</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col  mt-[35px]">
            <div className="relative pt-[24px] px-[20px] pb-[12px] border rounded-lg border-b-0 border-[#d4d4d4]">
              <span className="absolute text-xs font-semibold top-[8px] left-[20px] text-[#bdc3c7]">
                Faiz
              </span>
              {percent}
            </div>
            <div className="flex flex-col">
              <RangeSlider
                values={[percent]}
                setValues={setPercent}
                isStep={true}
              />
              <div className="flex justify-between mt-[10px] text-textPrimaryColor text-sm font-thin">
                <span>10.9 %</span>
                <span>39.8 %</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col  mt-[35px]">
            <div className="relative pt-[24px] px-[20px] pb-[12px] border rounded-lg border-b-0 border-[#d4d4d4]">
              <span className="absolute text-xs font-semibold top-[8px] left-[20px] text-[#bdc3c7]">
                Müddət
              </span>
              {time}
            </div>

            <div className="flex flex-col">
              <RangeSlider
                values={[time]}
                setValues={setTime}
                isStep={false}
                min={3}
                max={59}
                step={1}
              />
              <div className="flex justify-between mt-[10px] text-textPrimaryColor text-sm font-thin">
                <span>3 ay</span>
                <span>59 ay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[41.66%] px-4 ml-[95px]">
        <div className="rounded-lg border border-[#eaeaea] min-h-[329px] flex flex-col items-center justify-center">
          <h4 className="text-2xl mb-[33px] w-3/5 text-center">
            Nağd pul krediti üçün aylıq ödəniş
          </h4>
          <span className="text-[50px] text-mainColor font-bold mb-[51px]">
            {monthlyPayment} ₼
          </span>
          <MainButtonLink
            text="Sifariş et"
            url="/"
            width="w-[280px]"
            height="h-[55px]"
            bgColor="bg-mainColor"
            textColor="text-white"
            radius="rounded-lg"
            textSize="text-xl"
            hoverColor="hover:bg-mainColorHover"
          />
        </div>
      </div>
    </div>
  );
};
