import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export type AppRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean,
  children?: AppRouteRecordRaw[]
}
import graphPanel from '../views/flow-x6/workflow-editor/index.vue'
import view from '../views/flow-x6/view.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: graphPanel
    },
    {
      path: '/view',
      name: 'view',
      component: view
    },
  ] as AppRouteRecordRaw[]
})
 
export default router