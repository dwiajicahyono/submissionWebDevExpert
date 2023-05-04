/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#empty-content');
  I.see('Restaurant Like Not Found', '.restaurant-item-not-found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Restaurant Like Not Found', '.restaurant-item-not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__content h3 a');

  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const favoriteRestaurantTitle = await I.grabTextFrom('.restaurant-item__content h3');

  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Restaurant Like Not Found', '.restaurant-item-not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__content h3 a');

  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const favoriteRestaurantTitle = await I.grabTextFrom('.restaurant-item__content h3');

  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);

  I.click(locate('.restaurant-item__content h3 a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item-not-found');

  const noFavoriteRestaurant = await I.grabTextFrom('.restaurant-item-not-found');

  assert.strictEqual(noFavoriteRestaurant, 'Restaurant Like Not Found');
});
