import { Layout } from "antd";
import type { ComponentProps, FC } from "react";
import { Outlet } from "react-router";

const { Content } = Layout;

type State = ComponentProps<typeof Content>;

const MainContent: FC<State> = (props) => {
  const { className = "", ...rest } = props;
  return (
    <Content {...rest} className={`${className}`}>
      <div className="w-full max-w-[var(--breakpoint-xl)] mx-auto px-8">
        <Outlet />
      </div>
    </Content>
  );
};

export default MainContent;
