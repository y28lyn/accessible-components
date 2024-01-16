import "./index.css";

import { Header } from "./components/header/Header";
import Title from "./components/items/Title";
import Switch from "./components/items/Switch";
import MenuButton from "./components/items/MenuButton";
import Tooltip from "./components/items/Tooltip";
import Accordion from "./components/items/Accordion";
import Tabs from "./components/items/Tabs";

function App() {
  const handleSwitchChange = (isChecked: boolean) => {
    console.log(`Switch is ${isChecked ? "on" : "off"}`);
  };

  const tabs = [
    {
      id: "tab1",
      label: "Tab 1",
      content: <div>Contenu du Tab 1</div>,
    },
    {
      id: "tab2",
      label: "Tab 2",
      content: <div>Contenu du Tab 2</div>,
    },
    {
      id: "tab3",
      label: "Tab 3",
      content: <div>Contenu du Tab 3</div>,
    },
  ];

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
        <Accordion
          id="exampleAccordion"
          title="Example Accordion"
          items={[
            { id: "item1", label: "Personnal Information", type: "fieldset" },
            { id: "item2", label: "Default 1" },
            { id: "item3", label: "Default 2" },
          ]}
          fieldsetContent={
            <>
              <fieldset>
                <p>
                  <label htmlFor="name" className="text-md font-medium">
                    Name
                    <span aria-hidden="true">*</span>:<br></br>
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    aria-required="true"
                    className="rounded border-[1.3px] border-[#121315]"
                  />
                </p>
                <p>
                  <label htmlFor="email" className="text-md font-medium">
                    Email
                    <span aria-hidden="true">*</span>:<br></br>
                  </label>
                  <input
                    type="text"
                    name="Email"
                    id="email"
                    aria-required="true"
                    className="rounded border-[1.3px] border-[#121315]"
                  />
                </p>
              </fieldset>
            </>
          }
          defaultContent={<p>This is the default content.</p>}
        />

        <Title title="Tabs" />
        <Tabs tabs={tabs} />
      </main>
    </>
  );
}

export default App;
