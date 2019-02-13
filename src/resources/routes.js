import Home from 'sharedComponent/HomePage.vue';
import NotFound from 'sharedComponent/NotFound.vue';
import Books from 'components/Books/Books.vue';

export const routes = [
  {
    path: '/',
    component: Home,
    label: 'Home',
    name: 'homePage',
    iconClass: 'fa-home'
  },
  {
    path: '/books',
    component: Books,
    label: 'Books',
    name: 'booksPage',
    iconClass : 'fa-book'
  },
  {
    path: '*',
    component: NotFound,
    label: '',
    name: 'notFound'
  }
];
