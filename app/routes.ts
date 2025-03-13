import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes'

export default [
  layout('layouts/main/MainLayout.tsx', [
    index('routes/Home.tsx'),
    route('/transform-text', 'routes/Transform.tsx'),
  ]),
] satisfies RouteConfig
