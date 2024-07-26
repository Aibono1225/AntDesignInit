export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  {
    path: '/form',
    name: '表单页',
    icon: 'form',
    routes: [
      { path: '/form', name: '新增表单', component: './Form' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
