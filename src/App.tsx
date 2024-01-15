import "./index.css";

import { Header } from "./components/header/Header";
import Title from "./components/items/Title";
import Switch from "./components/items/Switch";

function App() {
  const handleSwitchChange = (isChecked: boolean) => {
    console.log(`Switch is ${isChecked ? "on" : "off"}`);
  };

  return (
    <>
      <header>
        <Header />
      </header>

      <main id="main" className="bg-[#121315]">
        <Title title="Switch" />
        <Switch
          label="On/Off"
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
      </main>
    </>
  );
}

export default App;
