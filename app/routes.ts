import { type RouteConfig, index, layout } from "@react-router/dev/routes";

export default [
  layout("layouts/main/MainLayout.tsx", [index("routes/Home.tsx")]),
] satisfies RouteConfig;
