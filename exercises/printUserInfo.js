let process = require('process');
// There are many facts about a user we might want to keep track of,
// but we want to be able to treat a user as a single value.
// That means the user has to be some kind of collection.

// Here's one way we might do it using an array.

let user = {};

user['firstName'] = 'Shaah';
user['lastName'] = 'Cooper';
user['currentLocation'] = 'San Francisco, California';
user['favoriteSongs'] = ['GOLDIE', 'BUTTERFLY EFFECT', 'FORBIDDEN FRUIT'];
user['favoriteMovies'] = ['American Gangster', 'Life', 'Friday'];
user['age'] = 100;
user['favoriteFood'] = ['Pizza'];


// To get started, set user['canBeDisplayed'] to true instead of false
user['canBeDisplayed'] = true;

if (user['canBeDisplayed'] === false) {
  console.log('Hey! Open up printUserInfo.js to get started.');
  process.exit();
}
printFavorites(user['favoriteMovies']);
printFavorites(user['favoriteSongs']);
printFavorites(user['favoriteFood']);
function printFavorites(array) {
  for (let i = 0; i < array.length; i += 1) {
    let favoritePosition = i + 1;
    let itemName = array[i];

    console.log(`${favoritePosition}. ${itemName}`);
  }

}
