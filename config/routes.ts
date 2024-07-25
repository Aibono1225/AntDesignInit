export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { name: '表单', icon: 'form', path: '/form', component: './Form' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
