import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import FormUser from '../pages/FormUser.vue';
const MovieInDetails = () => import('../pages/MovieInDetails.vue');
const MyMovies = () => import('../pages/MyMovies.vue');
const AddMovie = () => import('../pages/AddMovie.vue');
const movieStorage = () => import('../pages/movieStorage.vue');
const Movies = () => import('../pages/Movies.vue');
const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    alias: '/home',
  },
  { path: '/movies', component: Movies, name: 'movies' },
  {
    path: '/movieinDetails',
    component: MovieInDetails,
    name: 'movieInDetails',
  },
  {
    path: '/formUser',
    component: FormUser,
    name: 'formUser',
  },
  {
    path: '/addMovie',
    component: AddMovie,
    name: 'addMovie',
  },
  {
    path: '/home/myMovies',
    component: MyMovies,
    name: 'myMovies',
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
    alias: '/login',
  },
  {
    path: '/movieStorage',
    component: movieStorage,
    name: 'movieStorage',
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
