
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name:'login', component: () => import('src/pages/Login.vue') }
    ]
  },
    {
    path: '/seller',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'seller' ,component: () => import('pages/seller/Index.vue') },
      { path: '/seller/products', name:'products' ,component: () => import('pages/seller/Products.vue') }
    ]
  },
    {
    path: '/manager',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'manager', component: () => import('pages/manager/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
