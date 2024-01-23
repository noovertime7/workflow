import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export type AppRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean,
  children?: AppRouteRecordRaw[]
}
import graphPanel from '../views/flow-x6/v2/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: graphPanel
    },
  ] as AppRouteRecordRaw[]
})
 
export default router