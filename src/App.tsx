import "./index.css";

import { Header } from "./components/header/Header";
import Title from "./components/items/Title";
import Switch from "./components/items/Switch";
import MenuButton from "./components/items/MenuButton";
import Tooltip from "./components/items/Tooltip";

function App() {
  const handleSwitchChange = (isChecked: boolean) => {
    console.log(`Switch is ${isChecked ? "on" : "off"}`);
  };

  return (
    <>
      <header>
        <Header />
      </header>

      <main
        id="main"
        className="
      bg-[#121315]"
      >
        <Title title="Switch" />
        <Switch
          label="Notifications"
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
        <Title title="Menu Button" />
        <MenuButton
          label={"Open me"}
          menuItems={["Choice 1", "Choice 2", "Choice 3", "Choice 4"]}
        />
        <Title title="Tooltip" />
        <Tooltip text={"This is a tip"} button={"Hover me"} />
        <Title title="Accordion" />
        <Title title="Tabs" />
      </main>
    </>
  );
}

export default App;
