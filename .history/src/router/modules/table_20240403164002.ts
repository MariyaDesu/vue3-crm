import { RouteRecord } from "@/router/type"
import BasicLayout from "@/layouts/BasicLayout.vue";

import { Table } from '@vicons/tabler'

const tableRoutes: RouteRecord[] = [
  {
    path: "/table",
    component: BasicLayout,
    children: [
      {
        path: "",
        name: "Table",
        component: () => import("@/views/table/index.vue"),
        meta: {
          icon: Table,
        }
      },
    ],
  },
];

export default tableRoutes;
