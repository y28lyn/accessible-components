import { ErrorMessage, Field } from "formik";

type CheckboxProps = {
  id: string;
  name: string;
  value: string;
  label: string;
  style?: string | undefined;
};

const Checkbox = ({ id, name, value, label, style }: CheckboxProps) => (
  <div className={style}>
    <Field
      aria-describedby={`${id}-error`}
      aria-labelledby={`${id}-label`}
      className=""
      id={id}
      name={name}
      type="checkbox"
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

export default Checkbox;
