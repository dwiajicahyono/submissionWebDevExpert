/* eslint-disable no-undef */
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#empty-content');
  I.see('Restaurant Like Not Found', '.restaurant-item-not-found');
});

// Scenario('liking one restaurant', ({ I }) => {
//   I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

//   I.amOnPage('/');
// });

// Scenario('liking one restaurant', (I) => {
//   I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

//   I.amOnPage('/');

//   I.seeElement('.restaurant__title a');
//   I.click(locate('.restaurant__title a').first());

//   I.seeElement('#likeButton');
//   I.click('#likeButton');

//   I.amOnPage('/#/restaurant');
//   I.seeElement('.restaurant-item');
// });
