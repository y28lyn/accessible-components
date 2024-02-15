import "./index.css";

import Header from "./components/header/Header";
import Title from "./components/items/Title";
import Switch from "./components/items/Switch";
import MenuButton from "./components/items/MenuButton";
import Tooltip from "./components/items/Tooltip";
import Accordion from "./components/items/Accordion";
import Tabs from "./components/items/Tabs";
import Form from "./components/qcm/Form";

const App = () => {
  const handleSwitchChange = (checked: boolean) => {
    console.log(`Switch is ${checked ? "on" : "off"}`);
  };

  const formDescription = [
    {
      title: "Question 1",
      type: "radio",
      answers: ["Option 1", "Option 2", "Option 3"],
    },
    {
      title: "Question 2",
      type: "checkbox",
      answers: ["Option A", "Option B", "Option C"],
    },
  ];

  return (
    <>
      <header>
        <Header />
      </header>

      <main id="main" className="bg-[#121315]">
        <Title title="Switch" />
        <Switch
          label="Notifications"
          defaultChecked={true}
          onChange={handleSwitchChange}
        />

        <Title title="Menu Button" />
        <MenuButton
          label={"Open me"}
          menuItems={["Ahoice 1", "Bhoice 2", "Bhoice 3", "Dhoice 4"]}
        />

        <Title title="Tooltip" />
        <Tooltip text={"This is a tip"} button={"Hover me"} />

        <Title title="Accordion" />
        <Accordion />

        <Title title="Tabs" />
        <Tabs />

        <Title title="Form" />
        <Form formDescription={formDescription} />
      </main>
    </>
  );
};

export default App;
