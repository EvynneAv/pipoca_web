import { createRouter , createWebHistory} from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import FormUser from "../pages/FormUser.vue";
import BuyTicket from "../pages/BuyTicket.vue";
const routes = [

  // {
  //   path:"/home/buyticket",
  //   component: BuyTicket,
  //   name: 'buyticket'
  // },  

  // {
  //   path:"/home/buyticket",
  //   component: BuyTicket,
  //   name: 'buyticket'
  // },

  {
      path: "/",
      component: Home,
      name: "home",
      alias: "/home"
  }, 



]

export const router = createRouter({
  history: createWebHistory(),
  routes
})