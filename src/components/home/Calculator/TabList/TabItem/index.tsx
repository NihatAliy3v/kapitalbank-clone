import { Tab } from "@headlessui/react";
import React from "react";

interface TabItemProps {
    text:string
}

const TabItem:React.FC<TabItemProps> = ({text}) => {
  return (
    <Tab className="rounded-full pt-[6px] pb-[8px] px-[25px]  bg-[#e8ecf1] outline-none data-[selected]:bg-mainColor data-[selected]:text-white data-[hover]:bg-mainColor data-[hover]:text-white transition-all duration-300">
      {text}
    </Tab>
  );
};

export default TabItem;
