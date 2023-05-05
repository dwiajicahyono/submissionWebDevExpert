import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <h3 class="restaurant__information" >Detail Information  </h3>
  <div class="restaurant__info">
  <div class="restaurant__info__detail">
    <h4>Adress :</h4>
    <p>${restaurant.address}</p>
    </div>

    <div class="restaurant__info__detail">
    <h4>Restaurant City :</h4>
    <p>${restaurant.city}</p>
    </div>

    <div class="restaurant__info__detail">
    <h4>Foods :</h4>
    <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
    </div>
    
    <div class="restaurant__info__detail">
    <h4>Drinks :</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
    </div>
    <div class="estaurant__info__detail">
    <h4>Reviews :</h4>
    <p>${restaurant.customerReviews.map((customer) => customer.review).join(', ')}</p>
  </div>
  </div>
  <div class="restaurant__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
 
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
           src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeButtonTemplate,
  createLikedButtonTemplate,
};
