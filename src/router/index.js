// import Vue from 'vue'
// import Router from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/',
      name: '_home',
      redirect: '/home',
      component: resolve => require(['../Layout.vue'], resolve),
      children: [
        {
          path: '/home',
          name: 'Home',
          component: resolve => require(['../pages/Home.vue'], resolve),
        },
        {
          path: '/order',
          name: 'Order',
          component: resolve => require(['../pages/Order.vue'], resolve),
        }, {
          path: '/mine',
          name: 'Mine',
          component: resolve => require(['../pages/Mine.vue'], resolve),
        },
        {
          path: '/shoppingCart',
          name: 'ShoppingCart',
          component: resolve => require(['../pages/ShoppingCart.vue'], resolve),
        }
      ]
    },
    {
      path: '/confirmOrder',
      name: 'ConfirmOrder',
      component: resolve => require(['../pages/ConfirmOrder.vue'], resolve),
    },{
      path: '/buy',
      name: 'Buy',
      component: resolve => require(['../pages/Buy.vue'], resolve),
    },
    {
      path: '/address',
      name: 'Address',
      component: resolve => require(['../pages/Address.vue'], resolve),
    }, {
      path: '/addAddress',
      name: 'AddAddress',
      component: resolve => require(['../pages/AddAddress.vue'], resolve),
    },{
      path: '/editAddress',
      name: 'EditAddress',
      component: resolve => require(['../pages/EditAddress.vue'], resolve)
    },
  ]
})
