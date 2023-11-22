import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../stores/userStore';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import FormUser from '../pages/FormUser.vue';
import MovieInDetails from '../pages/MovieInDetails.vue';
const MyMovies = () => import('../pages/MyMovies.vue');
const AddMovie = () => import('../pages/AddMovie.vue');
const movieStorage = () => import('../pages/movieStorage.vue');
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
    path: '/admin/movie',
    component: AddMovie,
    name: 'addMovie',
    // botar um required auth aqui
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
