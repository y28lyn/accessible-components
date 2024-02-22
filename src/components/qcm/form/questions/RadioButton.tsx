import { ErrorMessage, Field } from "formik";

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
      aria-describedby={`${id}-error`}
      aria-labelledby={`${id}-label`}
      className=""
      id={id}
      name={name}
      type="radio"
      value={value}
    />
    <label className="" htmlFor={id} id={`${id}-label`}>
      {label}
    </label>

    <ErrorMessage name={name}>
      {(message) => <p id={`${id}-error`}>{message}</p>}
    </ErrorMessage>
  </div>
);

export default RadioButton;
