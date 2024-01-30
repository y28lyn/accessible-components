import { type JSX } from "react";

type Props = Omit<JSX.IntrinsicElements["div"], "role"> & {
  visible?: boolean;
};

const UITooltip = ({ children, visible, ...rest }: Props) => {
  return (
    visible && (
      <div role="tooltip" {...rest}>
        {children}
      </div>
    )
  );
};

export default UITooltip;
