import { type JSX } from "react";

type Props = Omit<
  JSX.IntrinsicElements["fieldset"],
  "aria-label" | "aria-labelledby"
> & {
  "aria-labelledby": NonNullable<
    JSX.IntrinsicElements["fieldset"]["aria-labelledby"]
  >;
};

const FieldGroup = ({ children, ...rest }: Props) => {
  return <fieldset {...rest}>{children}</fieldset>;
};

export default FieldGroup;
