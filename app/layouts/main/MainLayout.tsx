import { Layout } from "antd";
import type { ComponentProps, FC } from "react";
import MainHeader from "./components/MainHeader";
import MainContent from "./components/MainContent";

type State = ComponentProps<typeof Layout>;

const MainLayout: FC<State> = (props) => {
  const { className = "", ...rest } = props;
  return (
    <Layout {...rest} className={`${className} min-h-screen`}>
      <MainHeader />
      <MainContent />
    </Layout>
  );
};

export default MainLayout;
