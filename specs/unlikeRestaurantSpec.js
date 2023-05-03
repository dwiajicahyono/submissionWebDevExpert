/* eslint-disable no-undef */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Tidak Suka Restoran', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('harus memperlihatkan widget tidak suka ketika restoran sudah disukai', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy();
  });

  it('tidak harus memperlihatkan widget like ketika sebuah restoran sudah disukai', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy();
  });

  it('harus bisa untuk menghapus suka pada erestorant dari list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('harus tidak melempar eror jika tidak suka restorant apabila tidak dalam list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    // hapus dulu restoran dari daftar film yang disukai
    await FavoriteRestaurantIdb.deleteRestaurant(1);

    // kemudian, simulasikan pengguna menekan widget batal menyukai restoran
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
