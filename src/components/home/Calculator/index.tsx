import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";
import Tabs from "./TabList";
import RangeSlider from "../../ui/RangeSlider";
import { useState } from "react";

const Calculator = () => {
  const [values, setValues] = useState([10.9]);

  return (
    <section className="text-textPrimaryColor">
      <div className="container">
        <h2 className="text-4xl font-semibold mb-[14px]">Kalkulyator</h2>

        <TabGroup>
          <Tabs />

          <TabPanels>
            <TabPanel>
              <div>
                <h3 className="text-2xl mb-[10px] leading-[45px]">
                  Gündəlik tələbat krediti
                </h3>
                <div className="flex">
                  <div className="w-[58.33%]">
                    <p className="text-lg mb-[16px] leading-[27px]">
                      Siz müştərilərimizə asanlıqla əldə edə biləcəyiniz nağd
                      kredit təklif edirik.
                    </p>
                    % dərəcəsi rəsmiləşmə zamanı müəyyən olunacaq
                    <div className="flex flex-col gap-10 mt-[35px]">
                      <div className="relative pt-[24px] px-[20px] pb-[12px] border rounded-lg border-b-0 border-[#d4d4d4]">
                        <span className="absolute text-xs font-semibold top-[8px] left-[20px] text-[#bdc3c7]">
                          Məbləğ
                        </span>
                        <span>{values[0]}</span>
                        <div className="absolute top-full left-0 w-full ">
                          <RangeSlider values={values} setValues={setValues} />
                          <div className="flex justify-between mt-2">
                            <span className="text-sm font-light">
                              10.9%
                            </span>
                            <span className="text-sm font-light">
                              20%
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="relative pt-[24px] px-[20px] pb-[12px] border rounded-lg border-b-0 border-[#d4d4d4]">
                        <span className="absolute text-xs font-semibold top-[8px] left-[20px] text-[#bdc3c7]">
                          Məbləğ
                        </span>
                        10000
                      </div>
                    </div>
                  </div>

                  <div className="w-41.66%">asasas</div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h3 className="text-2xl mb-[10px] leading-[45px]">
                Birbank kartı
              </h3>
              <p className="text-lg mb-[16px] leading-[27px]">
                Müştərilərimizə asanlıqla əldə edə biləcəkləri taksit kartı
                təklif edirik.
              </p>
            </TabPanel>
            <TabPanel>
              <h3 className="text-2xl mb-[10px] leading-[45px]">
                Kapital depoziti kalkulyatoru
              </h3>
              <p className="text-lg mb-[16px] leading-[27px]">
                Yüksək faizlər əldə etməklə yanaşı, siz müqavilənin bitmə
                tarixinə 1 ay (30 təqvim günü) qalanadək depozit məbləğini
                artıra bilərsiniz.
              </p>
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <div className="flex"></div>
      </div>
    </section>
  );
};

export default Calculator;
