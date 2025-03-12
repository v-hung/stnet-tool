import type { FC, HTMLAttributes } from "react";

type State = HTMLAttributes<HTMLDivElement>;

const Button: FC<State> = (props) => {
  const { className, ...rest } = props;
  return <div {...rest} className={`${className}`}></div>;
};

export default Button;
