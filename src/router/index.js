import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import shoppingGuide from '../views/shopping-guide.vue'
import shoppingGuideDetail from '../views/shopping-guide-detail.vue'
import informationPublic from '../views/information-public.vue'
import informationPublicDetail from '../views/information-public-detail.vue'
import governmentService from '../views/government-service.vue'
import governmentServiceGuide from '../views/government-service-guide.vue'
import governmentServiceGuideDetail from '../views/government-service-guide-detail.vue'
import governmentServiceGuideDetailArticle from '../views/government-service-article.vue'
import trafficGuidance from '../views/traffic-guidance.vue'
import restaurantHotel from '../views/restaurant-hotel.vue'
import restaurantHotelDetail from '../views/restaurant-hotel-detail.vue'
import touristAttraction from '../views/tourist-attraction.vue'
import touristAttractionDetail from '../views/tourist-attraction-detail.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/shopping-guide',
        name: 'shoppingGuide',
        component: shoppingGuide,
      },
      {
        path: '/shopping-guide-detail',
        name: 'shoppingGuideDetail',
        component: shoppingGuideDetail,
        meta: {
          noLeft: true,
        }
      },
      {
        path: '/information-public',
        name: 'informationPublic',
        component: informationPublic,
      },
      {
        path: '/information-public-detail',
        name: 'informationPublicDetail',
        component: informationPublicDetail,
      },
      {
        path: '/government-service',
        name: 'governmentService',
        component: governmentService,
      },
      {
        path: '/government-service-guide',
        name: 'governmentServiceGuide',
        component: governmentServiceGuide,
      },
      {
        path: '/government-service-guide-detail',
        name: 'governmentServiceGuideDetail',
        component: governmentServiceGuideDetail,
      },
      {
        path: '/government-service-article',
        name: 'governmentServiceGuideDetailArticle',
        component: governmentServiceGuideDetailArticle,
      },
      {
        path: '/traffic-guidance',
        name: 'trafficGuidance',
        component: trafficGuidance,
      },
      {
        path: '/restaurant-hotel',
        name: 'restaurantHotel',
        component: restaurantHotel,
      },
      {
        path: '/restaurant-hotel-detail',
        name: 'restaurantHotelDetail',
        component: restaurantHotelDetail,
      },
      {
        path: '/tourist-attraction',
        name: 'touristAttraction',
        component: touristAttraction,
      },
      {
        path: '/tourist-attraction-detail',
        name: 'touristAttractionDetail',
        component: touristAttractionDetail,
      }
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
