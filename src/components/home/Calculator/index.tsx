import { TabGroup } from "@headlessui/react";
import Tabs from "./TabList";
import TabPanelList from "./TabPanelList";

const Calculator = () => {

  return (
    <section className="text-textPrimaryColor">
      <div className="container">
        <h2 className="text-4xl font-semibold mb-[14px]">Kalkulyator</h2>
        <TabGroup>
          <Tabs />
          <TabPanelList />
        </TabGroup>

        <div className="flex"></div>
      </div>
    </section>
  );
};

export default Calculator;
