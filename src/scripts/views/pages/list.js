import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
    <div class="hero lazyload">
    <div class="hero__inner">
      <h1 class="hero__title">Mari Cari Restaurant Yang Kami Rekomendasikan</h1>
      <p class="hero__tagline">Mencari Restaurant dengan Makanan Enak semudah Membalikan Telapak Tangan</p>
    </div>
  </div>
      
        <div class="content">
        <div class="explore__restaurant" id="main">
          <h1 class="explore__label">Explore Restaurant</h1>
        </div>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurant();
    // console.log(restaurants);
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML
        += createRestaurantItemTemplate(restaurant);
    });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default ListRestaurant;
