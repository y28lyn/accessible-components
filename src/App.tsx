import SideBar from "./components/items/SideBar";
import Header from "./components/header/Header";
import Accordion from "./components/items/Accordion";
import MenuButton from "./components/items/MenuButton";
import Switch from "./components/items/Switch";
import Title from "./components/items/Title";
import Tooltip from "./components/items/Tooltip";
import Tabs from "./components/items/Tabs";
import type { FormDescription } from "./components/qcm/form/Form";
import Form from "./components/qcm/form/Form";
import "./index.css";

const App = () => {
  const handleSwitchChange = (checked: boolean) => {
    console.log(`Switch is ${checked ? "on" : "off"}`);
  };

  const formDescription: FormDescription = [
    {
      title:
        "1) Pour quelles familles de handicap, la Fédération Française Handisport organise-t-elle des compétitions ?",
      type: "checkbox",
      answers: [
        "A : Handicap Moteur",
        "B : Handicap Visuel",
        "C : Handicap Auditif",
        "D : Handicap Mental",
        "E : Handicap Psychique",
      ],
      correctAnswers: [
        "A : Handicap Moteur",
        "B : Handicap Visuel",
        "C : Handicap Auditif",
      ],
    },
    {
      title:
        "2) Quel est le nom de la plateforme permettant de choisir un sport pour les personnes en situation de handicap ?",
      type: "radio",
      answers: [
        "A : Guide des parasports",
        "B : Annuaire des handisports",
        "C : Handiguide des sports",
      ],
      correctAnswers: ["C : Handiguide des sports"],
    },
  ];

  return (
    <>
      <header>
        <Header />
      </header>

      <main
        id="main"
        className="min-h-screen flex flex-col md:flex-row bg-[#121315]"
      >
        <SideBar />
        <ul>
          <li id="switch">
            <Title title="Switch" />
            <Switch
              label="Notifications"
              defaultChecked={true}
              onChange={handleSwitchChange}
            />
          </li>

          <li id="menubutton">
            <Title title="Menu Button" />
            <MenuButton
              label={"Open me"}
              menuItems={["Apple", "Banana", "Blueberry", "Durian"]}
            />
          </li>

          <li id="tooltip">
            <Title title="Tooltip" />
            <Tooltip text={"This is a tip"} button={"Hover me"} />
          </li>

          <li id="accordion">
            <Title title="Accordion" />
            <Accordion />
          </li>

          <li id="tabs">
            <Title title="Tabs" />
            <Tabs />
          </li>

          <li id="form">
            <Title title="Form" />
            <div className="p-6">
              <Form
                formDescription={formDescription}
                formStyle="p-6 w-fit flex flex-col gap-4 rounded bg-white"
                submitStyle="bg-slate-800 text-white rounded hover:scale-105 duration-200 w-32 p-2"
                questionStyle="font-bold text-xl mb-2"
                radioStyle="font-semibold"
                checkboxStyle="font-semibold"
              />
            </div>
          </li>
        </ul>
      </main>
    </>
  );
};

export default App;
