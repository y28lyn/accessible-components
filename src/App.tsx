import "./index.css";

import Header from "./components/header/Header";
import Title from "./components/items/Title";
import Switch from "./components/items/Switch";
import MenuButton from "./components/items/MenuButton";
import Tooltip from "./components/items/Tooltip";
import Accordion from "./components/items/Accordion";
import Tabs from "./components/items/Tabs";
import Form, { type FormDescription } from "./components/qcm/form/Form";

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
          <Form
            formDescription={formDescription}
            formStyle="p-6 w-fit flex flex-col gap-4 rounded bg-white"
            submitStyle="bg-slate-800 text-white rounded hover:scale-105 duration-200 w-32 p-2"
            questionStyle="font-bold text-xl mb-2"
            radioStyle="font-semibold"
            checkboxStyle="font-semibold"
          />
        </section>
      </main>
    </>
  );
};

export default App;
