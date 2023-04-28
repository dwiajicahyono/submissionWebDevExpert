import ListRestaurant from '../views/pages/list';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': ListRestaurant, // default page
  '/list': ListRestaurant,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
