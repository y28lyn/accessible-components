import "./index.css";

import Header from "./components/header/Header";
import Title from "./components/items/Title";
import Switch from "./components/items/Switch";
import MenuButton from "./components/items/MenuButton";
import Tooltip from "./components/items/Tooltip";
import Accordion from "./components/items/Accordion";
import Tabs from "./components/items/Tabs";
import Formulary from "./components/qcm/Form";

const App = () => {
  const handleSwitchChange = (checked: boolean) => {
    console.log(`Switch is ${checked ? "on" : "off"}`);
  };

  const formDescription = [
    {
      title: "Question 1",
      type: "radio",
      answers: ["Option 1", "Option 2"],
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
          menuItems={["Apple", "Banana", "Blueberry", "Durian"]}
        />

        <Title title="Tooltip" />
        <Tooltip text={"This is a tip"} button={"Hover me"} />

        <Title title="Accordion" />
        <Accordion />

        <Title title="Tabs" />
        <Tabs />

        <Title title="Form" />
        <section className="p-6">
          <Formulary
            formStyle="p-6 w-fit flex flex-col gap-4 rounded bg-white items-center"
            formDescription={formDescription}
            submitStyle="bg-slate-800 text-white rounded hover:scale-105 duration-200 w-32 p-2"
          />
        </section>
      </main>
    </>
  );
};

export default App;
