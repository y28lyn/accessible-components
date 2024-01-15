import "./index.css";

import { Header } from "./components/header/Header";
import Title from "./components/items/Title";
import Switch from "./components/items/Switch";
import MenuButton from "./components/items/MenuButton";

function App() {
  const handleSwitchChange = (isChecked: boolean) => {
    console.log(`Switch is ${isChecked ? "on" : "off"}`);
  };

  return (
    <>
      <header>
        <Header />
      </header>

      <main id="main" className="h-screen bg-[#121315]">
        <Title title="Switch" />
        <Switch
          label="Notifications"
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
        <Title title="Menu Button" />
        <MenuButton label={"Test"} menuItems={["Test 1", "Test 2"]} />
      </main>
    </>
  );
}

export default App;
