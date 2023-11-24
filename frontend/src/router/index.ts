import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../stores/userStore';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import FormUser from '../pages/FormUser.vue';
import MovieInDetails from '../pages/MovieInDetails.vue';
const MyMovies = () => import('../pages/MyMovies.vue');
const AddMovie = () => import('../pages/AddMovie.vue');

const movieStorage = () => import('../pages/movieStorage.vue');
import AddSession from '../pages/AddSession.vue';
import SessionInDetails from '../pages/SessionInDetails.vue';
import SessionStorage from '../pages/SessionStorage.vue';

const Movies = () => import('../pages/Movies.vue');
const routes = [
  {
    path: '/admin/novo',
    component: AddMovie,
    name: 'addMovie',
    meta: {
      requireAuth: true,
      authorized: ['admin'],
    },
  },
  {
    path: '/movies/editar/:id',
    component: AddMovie,
    meta: {
      requireAuth: true,
      authorized: ['admin'],
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
      authorized: ['admin', 'funcionario'],
    },
  },

  {
    path: '/adminSession/novo',
    component: AddSession,
    name: 'addSession',
    meta: {
      requireAuth: true,
      authorized: ['admin', 'funcionario'],
    },
    props: true,
  },
  {
    path: '/adminSession/editar/:id',
    component: AddSession,
    meta: {
      requireAuth: true,
      authorized: ['admin', 'funcionario'],
    },
    props: true,
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
  {
    path: '/admin',
    component: movieStorage,
    meta: {
      requireAuth: true,
      authorized: ['admin'],
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  const userStore = useUserStore();
  const user = userStore.user.username;
  const papel = userStore.user.role;
  const authorized: string[] = <string[]>to.meta.authorized;
  console.log(
    `quero ir pra ${to.path}. É protegida? ${to.meta.requireAuth}.Eu sou o ${user} com o papel ${papel} ${authorized}`,
  );
  console.log(`${to.meta.requireAuth}, ${authorized}  `);

  if (to.meta.requireAuth && (!user || !authorized.includes(papel))) {
    return { path: '/login' };
  }
});
