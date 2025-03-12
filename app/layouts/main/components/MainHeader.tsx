import { Layout } from "antd";
import type { ComponentProps, FC } from "react";

const { Header } = Layout;

type State = ComponentProps<typeof Header>;

const MainHeader: FC<State> = (props) => {
  const { className = "", ...rest } = props;
  return (
    <Header
      {...rest}
      className={`${className} bg-transparent bg-gradient-to-r from-blue-600 to-blue-500/10 px-8 py-4 leading-normal h-auto shadow-sm`}
    >
      <div className="text-white font-semibold text-lg">STnet Tools</div>
    </Header>
  );
};

export default MainHeader;
