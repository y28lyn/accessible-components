import { type JSX } from "react";

type Props = Omit<JSX.IntrinsicElements["div"], "role">;

const List = ({ children, ...rest }: Props) => {
  return (
    <div role="tablist" {...rest}>
      {children}
    </div>
  );
};

export default List;
