import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../stores/userStore';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import FormUser from '../pages/FormUser.vue';
import MovieInDetails from '../pages/MovieInDetails.vue';
const MyMovies = () => import('../pages/MyMovies.vue');
const AddMovie = () => import('../pages/AddMovie.vue');
const movieStorage = () => import('../pages/movieStorage.vue');
import SessionInDetails from '../pages/SessionInDetails.vue';
import SessionStorage from '../pages/SessionStorage.vue';
const Movies = () => import('../pages/Movies.vue');
const routes = [
  {
    path: '/admin',
    component: movieStorage,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/admin/novo',
    component: AddMovie,
    name: 'addMovie',
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/movies/editar/:id',
    component: AddMovie,
    meta: {
      requireAuth: true,
    },
    props: true,
  },
  {
    path: '/',
    component: Home,
    name: 'home',
    alias: '/home',
  },
  { path: '/movies', component: Movies, name: 'movies' },
  {
    path: '/movies/:id',
    component: MovieInDetails,
    name: 'movieInDetails',
  },
  {
    path: '/sessions/:id',
    component: SessionInDetails,
    name: 'sessionInDetails',
  },
  {
    path: '/adminSession',
    component: SessionStorage,
    name: 'sessionStorage',
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/adminSession/novo',
    component: AddMovie,
    name: 'addSession',
    //required authorization aqui
  },
  {
    path: '/adminSession/novo',
    component: AddMovie,
    name: 'addSession',
    //required authorization aqui
  },

  // --------------------------------------------
  {
    path: '/formUser',
    component: FormUser,
    name: 'formUser',
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
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  const userStore = useUserStore();
  const user = userStore.user.role;
  const papel = userStore.user.role;

  console.log(
    `quero ir pra ${to.path}. É protegida? ${to.meta.requireAuth}.Eu sou o ${user} com o papel ${papel}`,
  );
  if (to.meta.requireAuth && user == null) {
    return { path: '/login' };
  }
});
