import { TabPanels } from "@headlessui/react";
import TabPanelItem from "./TabPanelItem";
import { CreditTab } from "./TabComponents/CreditTab";

const TabPanelList = () => {
  return (
    <>
      <TabPanels>
        <TabPanelItem>
          <CreditTab />
        </TabPanelItem>
        <TabPanelItem>
          <h3 className="text-2xl mb-[10px] leading-[45px]">Birbank kartı</h3>
          <p className="text-lg mb-[16px] leading-[27px]">
            Müştərilərimizə asanlıqla əldə edə biləcəkləri taksit kartı təklif
            edirik.
          </p>
        </TabPanelItem>
        <TabPanelItem>
          <h3 className="text-2xl mb-[10px] leading-[45px]">
            Kapital depoziti kalkulyatoru
          </h3>
          <p className="text-lg mb-[16px] leading-[27px]">
            Yüksək faizlər əldə etməklə yanaşı, siz müqavilənin bitmə tarixinə 1
            ay (30 təqvim günü) qalanadək depozit məbləğini artıra bilərsiniz.
          </p>
        </TabPanelItem>
      </TabPanels>
    </>
  );
};

export default TabPanelList;
