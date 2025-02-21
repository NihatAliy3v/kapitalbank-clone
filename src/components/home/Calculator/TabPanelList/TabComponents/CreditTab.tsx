import { useState } from "react";
import RangeSlider from "../../../../ui/RangeSlider";

export const CreditTab = () => {
  const [amount, setAmount] = useState(1000);
  const [percent, setPercent] = useState(10.9);
  const [time, setTime] = useState(3);

  return (
    <div>
      <h3 className="text-2xl mb-[10px] leading-[45px]">
        Gündəlik tələbat krediti
      </h3>
      <div className="flex">
        <div className="w-[58.33%]">
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

        <div className="w-41.66%">asasas</div>
      </div>
    </div>
  );
};
