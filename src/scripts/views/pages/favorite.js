import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked restaurants</h2>
        <div id="restaurants" class="restaurants">
        </div>
        <div id="empty-content"></div>
      </div>
      
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const container = document.querySelector('#restaurants');
    const empty = document.getElementById('empty-content');

    if (restaurants.length < 1) {
      empty.innerHTML += `
      <div id"message">
        <h2 tabindex="0" class="restaurant-item-not-found">Restaurant Like Not Found</h2>
        <p> try to like some restaurant</p>
      </div>
      `;

      container.innerHTML = '';
    } else if (restaurants.length >= 1) {
      const restaurantsContainer = document.querySelector('#restaurants');
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      empty.innerHTML = '';
    }
  },
};

export default Favorite;
