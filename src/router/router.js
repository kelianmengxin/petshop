import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history', //去掉#号
  routes: [{
      path: '/',
      name: 'Login',
      component: resolve => require(['../components/index.vue'], resolve)
    },
    {
      path: '/pet/index',
      name: 'allpet',
      component: resolve => require(['../components/pet/index.vue'], resolve)
    },
    {
      path: '/pet/cat',
      name: 'cat',
      component: resolve => require(['../components/pet/cat.vue'], resolve)
    },
    {
      path: '/pet/dog',
      name: 'dog',
      component: resolve => require(['../components/pet/dog.vue'], resolve)
    },
    {
      path: '/pet/pig',
      name: 'pig',
      component: resolve => require(['../components/pet/pig.vue'], resolve)
    },
    {
      path: '/customer/index',
      name: 'allcustomer',
      component: resolve => require(['../components/customer/index.vue'], resolve)
    },
    {
      path: '/customer/vip',
      name: 'vip',
      component: resolve => require(['../components/customer/vip.vue'], resolve)
    },
    {
      path: '/customer/admin',
      name: 'admin',
      component: resolve => require(['../components/customer/admin.vue'], resolve)
    },
    {
      path: '/fostercare/index',
      name: 'allfostercare',
      component: resolve => require(['../components/fostercare/index.vue'], resolve)
    },
    {
      path: '/fostercare/my',
      name: 'myfostercare',
      component: resolve => require(['../components/fostercare/my.vue'], resolve)
    },
    {
      path: '/fostercare/rule',
      name: 'rulefostercare',
      component: resolve => require(['../components/fostercare/rule.vue'], resolve)
    },
    {
      path: '/leavemessage/look',
      name: 'lookleavemessage',
      component: resolve => require(['../components/leavemessage/look.vue'], resolve)
    },
    {
      path: '/leavemessage/my',
      name: 'myleavemessage',
      component: resolve => require(['../components/leavemessage/my.vue'], resolve)
    },
    {
      path: '/manual/look',
      name: 'manuallook',
      component: resolve => require(['../components/manual/look.vue'], resolve)
    },
    {
      path: '/manual/dog',
      name: 'manualdog',
      component: resolve => require(['../components/manual/dog.vue'], resolve)
    },
    {
      path: '/manual/cat',
      name: 'manualcat',
      component: resolve => require(['../components/manual/cat.vue'], resolve)
    },
    {
      path: '/manual/pig',
      name: 'manualpig',
      component: resolve => require(['../components/manual/pig.vue'], resolve)
    },
    {
      path: '/count/month',
      name: 'month',
      component: resolve => require(['../components/count/month.vue'], resolve)
    },
    {
      path: '/count/year',
      name: 'year',
      component: resolve => require(['../components/count/year.vue'], resolve)
    },
    {
      path: '/manage/approval',
      name: 'approval',
      component: resolve => require(['../components/manage/approval.vue'], resolve)
    },
    {
      path: '/manage/order',
      name: 'costorder',
      component: resolve => require(['../components/manage/order.vue'], resolve)
    },
    {
      path: '/manage/bookmanage',
      name: 'bookmanage',
      component: resolve => require(['../components/manage/bookmanage.vue'], resolve)
    }, {
      path: '/manage/caremanage',
      name: 'caremanage',
      component: resolve => require(['../components/manage/caremanage.vue'], resolve)
    },
    {
      path: '/manage/leavemessagemanage',
      name: 'manageleavemessage',
      component: resolve => require(['../components/manage/leavemessagemanage.vue'], resolve)
    },
    {
      path: '/manage/usermanage',
      name: 'usermanage',
      component: resolve => require(['../components/manage/usermanage.vue'], resolve)
    },
    {
      path: '/booking/my',
      name: 'mybooking',
      component: resolve => require(['../components/booking/my.vue'], resolve)
    },
    {
      path: '/booking/rule',
      name: 'bookingrule',
      component: resolve => require(['../components/booking/rule.vue'], resolve)
    },
    {
      path: '/help/help',
      name: 'help',
      component: resolve => require(['../components/help/help.vue'], resolve)
    },
    {
      path: '/help/about',
      name: 'about',
      component: resolve => require(['../components/help/about.vue'], resolve)
    },
    {
      path: '/shpping/order',
      name: 'order',
      component: resolve => require(['../components/shpping/order.vue'], resolve)
    },
    {
      path: '/shpping/shopcar',
      name: 'shopcar',
      component: resolve => require(['../components/shpping/shopcar.vue'], resolve)
    },
    {
      path: '/shpping/favorites',
      name: 'favorites',
      component: resolve => require(['../components/shpping/favorites.vue'], resolve)
    },
    {
      path: '/shpping/cost',
      name: 'shppingcost',
      component: resolve => require(['../components/shpping/cost.vue'], resolve)
    },
    {
      path: '/shpping/historycost',
      name: 'historycost',
      component: resolve => require(['../components/shpping/historycost.vue'], resolve)
    },
    {
      path: '/shpping/person',
      name: 'person',
      component: resolve => require(['../components/shpping/person.vue'], resolve)
    }
  ]
})