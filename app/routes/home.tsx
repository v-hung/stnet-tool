import { Breadcrumb } from "antd";
import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "STnet Tools" },
    { name: "author", content: "viet.hung.2898@gmail.com" },
  ];
}

export default function Home() {
  return <>
    <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
  </>;
}
