import { Field } from "formik";

type RadioProps = {
  id: string;
  name: string;
  value: string;
  label: string;
  style?: string | undefined;
};

const RadioButton = ({ id, name, value, label, style }: RadioProps) => (
  <div className={style}>
    <Field
      type="radio"
      role="radio"
      id={id}
      name={name}
      value={value}
      aria-checked={value === "true" ? "true" : "false"}
      tabIndex={0}
    />
    <label htmlFor={id}>{label}</label>
  </div>
);

export default RadioButton;
