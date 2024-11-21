import TabItem from "./TabItem";
import { TabList } from "@headlessui/react";

const tabList = [
  {
    text: "Kredit",
  },
  {
    text: "Birbank kartı",
  },
  {
    text: "Depozit",
  },
];

const Tabs = () => {
  return (
    <TabList className="flex gap-[14px] mb-[24px]">
      {tabList.map((item,index) => (
        <TabItem key={index} text={item.text} />
      ))}
    </TabList>
  );
};

export default Tabs;
