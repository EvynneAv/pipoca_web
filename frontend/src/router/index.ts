import { createRouter , createWebHistory} from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import BuyTicket from "../pages/BuyTicket.vue";
import FormUser from "../pages/FormUser.vue";
import MovieInDetails from "../pages/MovieInDetails.vue";
const MyMovies = () => import("../pages/MyMovies.vue");
const AddMovie = () => import("../pages/AddMovie.vue")
const addSession = () => import("../pages/AddSession.vue")
const movieStorage = () => import("../pages/movieStorage.vue")
const routes = [
    { 
      path: "/",
      component: Home,
      name: "home",
      alias: "/home"
    }, 
    {
      path: "/movieinDetails" ,
      component: MovieInDetails,
      name: "movieInDetails"
    },
    {
      path: "/formUser",
      component: FormUser,
      name: "formUser"
    },
    {
      path: "/addMovie",
      component: AddMovie,
      name: "addMovie"
    },
    {
      path: "/addSession",
      component: addSession,
      name: "addSession"
    },
    {
      path: "/home/myMovies",
      component: MyMovies,
      name: "myMovies"
    },
    {
      path: "/login",
      component: Login,
      name: "login",
      alias: "/login"
    },
    {
      path:"/buyTicket",
      component: BuyTicket,
      name: 'buyticket'
    },  
    {
      path:"/movieStorage",
      component: movieStorage,
      name:"movieStorage"
    },

]

export const router = createRouter({
  history: createWebHistory(),
  routes
})