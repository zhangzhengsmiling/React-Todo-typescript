import { RouteConfig } from 'react-router-config';
import { CONSTANTS_ROUTES } from './constants';
import asyncImportComponent from '@/utils/async-import-component';
import { redirectTo } from './utils';
import LayoutA from '@/layouts/LayoutA';
import LayoutB from '@/layouts/LayoutB';
import PageNotFound from '@/components/PageNotFound';

const A = asyncImportComponent(() => import('@/pages/A'));
const B = asyncImportComponent(() => import('@/pages/B'));
const C = asyncImportComponent(() => import('@/pages/C'));
const D = asyncImportComponent(() => import('@/pages/D'));

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: redirectTo(CONSTANTS_ROUTES.PAGE_A),
  },
  {
    path: CONSTANTS_ROUTES.LAYOUT_A,
    component: LayoutA,
    routes: [
      {
        path: CONSTANTS_ROUTES.LAYOUT_A,
        exact: true,
        component: redirectTo(CONSTANTS_ROUTES.PAGE_A),
      },
      {
        path: CONSTANTS_ROUTES.PAGE_A,
        component: A,
      },
      {
        path: CONSTANTS_ROUTES.PAGE_B,
        component: B,
      },
      {
        path: '*',
        component: PageNotFound,
      }
    ]
  },
  {
    path: CONSTANTS_ROUTES.LAYOUT_B,
    component: LayoutB,
    routes: [
      {
        path: CONSTANTS_ROUTES.LAYOUT_B,
        exact: true,
        component: redirectTo(CONSTANTS_ROUTES.PAGE_C),
      },
      {
        path: CONSTANTS_ROUTES.PAGE_C,
        component: C
      },
      {
        path: CONSTANTS_ROUTES.PAGE_D,
        component: D
      },
      {
        path: '*',
        component: PageNotFound,
      }
    ]
  },
  {
    path: '*',
    component: PageNotFound,
  }
]

export default routes;
