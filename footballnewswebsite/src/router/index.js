import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddPost from '../views/AddPost.vue'
import Post from '../views/Post.vue'
import EditPost from '../views/EditPost.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Logout from '../views/Logout.vue'
import Profile from '../views/Profile.vue'
import Dashboard from '../views/Dashboard.vue'
import store from '.././store'
import Users from '../views/Users.vue'
import Messages from '../views/Messages.vue'
import ContactUs from '../views/ContactUs.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add-post",
    name: "add-post",
    component: AddPost,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: "/post/:id",
    name: "post",
    component: Post,
  },
  {
    path: "/edit-post/:id",
    name: "edit-post",
    component: EditPost,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUs,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta:{
      requiresGuest: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta:{
      requiresGuest: true
    }
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: "/users",
    name: "users",
    component: Users,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: "/messages",
    name: "messages",
    component: Messages,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!store.getters.isLoggedIn){
      //Redirect to the Login Page
      next('/login');
    } else{
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)){
    if(store.getters.isLoggedIn){
      //Redirect to the Login Page
      next('/profile');
    } else{
      next();
    }
  } else{
    next()
  }
})

export default router
