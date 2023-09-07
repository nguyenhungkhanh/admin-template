import { HomeOutlined, ReadOutlined } from '@ant-design/icons'

import Home from '../pages/home'
import Login from '../pages/login'
import Posts from '../pages/posts'
import CreatePost from '../pages/posts/create'
import EditPost from '../pages/posts/edit'
import BoThu from '../pages/bo-thu'

import { LAYOUT_NAME } from '../configs'

export enum ROUTER_NAME {
  LOGIN = '/login',
  HOME = '/',
  POSTS = '/posts',
  POSTS_CREATE = '/posts/create',
  POSTS_EDIT = '/posts/edit',
  BO_THU = '/214-bo-thu',
}

export const ROUTER_BY_PATH: any = {
  [ROUTER_NAME.LOGIN]: {
    path: ROUTER_NAME.LOGIN,
    title: 'Đăng nhập',
    component: Login,
  },
  [ROUTER_NAME.HOME]: {
    exact: true,
    path: ROUTER_NAME.HOME,
    title: 'Trang chủ',
    component: Home,
    menuIcon: HomeOutlined,
  },
  [ROUTER_NAME.POSTS]: {
    exact: true,
    path: ROUTER_NAME.POSTS,
    title: 'Danh sách bài viết',
    component: Posts,
    menuIcon: ReadOutlined,
  },
  [ROUTER_NAME.POSTS_CREATE]: {
    path: ROUTER_NAME.POSTS_CREATE,
    title: 'Thêm bài viết',
    component: CreatePost,
  },
  [ROUTER_NAME.POSTS_EDIT]: {
    path: ROUTER_NAME.POSTS_EDIT,
    title: 'Chi tiết bài viết',
    component: EditPost,
  },
  [ROUTER_NAME.BO_THU]: {
    path: ROUTER_NAME.BO_THU,
    title: '214 bộ thủ',
    component: BoThu,
    menuIcon: ReadOutlined,
  },
}

export const BREADCRUMB_BY_PATH: any = {
  [ROUTER_NAME.HOME]: [ROUTER_BY_PATH[ROUTER_NAME.HOME]],
  [ROUTER_NAME.POSTS]: [
    ROUTER_BY_PATH[ROUTER_NAME.HOME],
    ROUTER_BY_PATH[ROUTER_NAME.POSTS],
  ],
  [ROUTER_NAME.POSTS_CREATE]: [
    ROUTER_BY_PATH[ROUTER_NAME.HOME],
    ROUTER_BY_PATH[ROUTER_NAME.POSTS],
    ROUTER_BY_PATH[ROUTER_NAME.POSTS_CREATE],
  ],
  [ROUTER_NAME.POSTS_EDIT]: [
    ROUTER_BY_PATH[ROUTER_NAME.HOME],
    ROUTER_BY_PATH[ROUTER_NAME.POSTS],
    ROUTER_BY_PATH[ROUTER_NAME.POSTS_EDIT],
  ],
  [ROUTER_NAME.BO_THU]: [ROUTER_BY_PATH[ROUTER_NAME.BO_THU]],
}

const routes = [
  {
    layout: LAYOUT_NAME.BLANK,
    items: [ROUTER_BY_PATH[ROUTER_NAME.LOGIN]],
  },
  {
    layout: LAYOUT_NAME.MAIN,
    items: [
      ROUTER_BY_PATH[ROUTER_NAME.HOME],
      ROUTER_BY_PATH[ROUTER_NAME.POSTS],
      ROUTER_BY_PATH[ROUTER_NAME.POSTS_CREATE],
      ROUTER_BY_PATH[ROUTER_NAME.POSTS_EDIT],
      ROUTER_BY_PATH[ROUTER_NAME.BO_THU],
    ],
  },
]

export default routes
