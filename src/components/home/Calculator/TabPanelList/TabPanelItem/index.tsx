import { TabPanel } from "@headlessui/react";
import React from "react";

const TabPanelItem: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <TabPanel>{children}</TabPanel>;
};

export default TabPanelItem;
