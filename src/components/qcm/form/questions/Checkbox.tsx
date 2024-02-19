import { Field } from "formik";

type CheckboxProps = {
  id: string;
  name: string;
  value: string;
  label: string;
  style?: string | undefined;
};

const Checkbox = ({ id, name, value, label, style }: CheckboxProps) => (
  <div className={style}>
    <Field type="checkbox" id={id} name={name} value={value} />
    <label htmlFor={id}>{label}</label>
  </div>
);

export default Checkbox;
