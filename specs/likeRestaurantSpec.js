/* eslint-disable no-undef */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Menyukai sebuah restorant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });
  // tes ke 1
  it('harus memperlihatkan sebuah tombol like ketika sebuah restoran tidak disukai sebelumnya', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
  });
  // tes ke 2
  it('tidak boleh menampilkan tombol unlike ketika restoran tidak disukai sebelumnya', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeFalsy();
  });
  // tes ke 3
  it('harus bisa menyediakan untuk menyukai restoran', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaur = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaur).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });
  // tes ke 4
  it('seharusnya tidak menambahkan restorant ketika sudah disukai', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    // tambahkan restoran dengan id 1 ke daftar resto yang disukai
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    // simulasikan pengguna menekan tombol suka resto
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // tidak ada restoran yang ganda
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });
  // tes ke 5
  xit('harus tidak menambahkan restoran ketika restoran tidak memiliki Id', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {},
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
