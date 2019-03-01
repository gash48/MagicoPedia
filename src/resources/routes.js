import Home from 'sharedComponent/HomePage.vue';
import NotFound from 'sharedComponent/NotFound.vue';
import Books from 'components/Books/Books.vue';
import BooksList from 'components/Books/BooksList.vue';
import BookContent from 'components/Books/BookContent.vue'; 
import Schools from 'components/Schools/Schools.vue';

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
    label: 'Books',
    component : Books,
    redirect : {
      name : 'booksPage'
    },
    iconClass : 'fa-book',
    children : [
      {
        path : '',
        component: BooksList,
        name: 'booksPage'
      },
      {
        path : ':id',
        component : BookContent,
        name : 'bookContent'
      }
    ]
  },
  {
    path: '/schools',
    component: Schools,
    label: 'Schools',
    name: 'schoolsPage',
    iconClass : 'fas-house'
  },
  {
    path: '*',
    component: NotFound,
    label: '',
    name: 'notFound'
  }
];
