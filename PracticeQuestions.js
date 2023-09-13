
////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////


const x = 6

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.
const add = function(a, b) {
    return a + b + x;
}
console.log(add(2, 3))
// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.
const addArrow = (a, b) => {
    return a + b + x;
}
console.log(addArrow(2, 3))
// 3. Write a function that returns another function. (use arrow functions please)
const returnFunc = () => {
    return () => {
        return 'Hello World'
    }
}
console.log(returnFunc()())
// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.
const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2))
//4. Answer: Because of closure, the inner function has access to the variables in the outer function.  In this case, the inner function has access to the variable "y" because it is in the outer function.  The inner function is returned from the outer function and is assigned to the variable "insideFunc".  The variable "insideFunc" is then called with the argument of 2.  The inner function then adds the argument of 2 to the variable "y" which is 5.  The result is 7.

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  
  if(Math.ceil(Math.random() * 2) < 2){
    throw new Error("Error was thrown");
  }
  
  return 'success'
}

function handleCouldThrowError(callback) {
    try {
        console.log(callback());
    } catch (error) {
        console.log("Sorry, there was an error");
    }
}

handleCouldThrowError(couldThrowError);



////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////


const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]
const favoriteFoods = userData.map(user => {
    return {
        id: user.id,
        favoriteFoods: user.favorites.food.length
    }
})
console.log(favoriteFoods)

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const pizzaLovers = userData.reduce((acc, user) => {
    if (user.favorites.food.includes('pizza')) {
        acc.push(user.name)
    }
    return acc
}, [])
console.log(pizzaLovers)


// 7. Show an an example of a switch statement being used
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const switchFunc = (arr) => {
    return arr.map(element => {
        switch (true) {
            case element % 2 === 0:
                return 'Even'
            case element % 2 !== 0:
                return 'Odd'
            default:
                return element
        }
    })
}

console.log(switchFunc(myArr))

////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////


const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
 };
 const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
 };
  

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const userFunc = {
    ...userPersonalData,
    ...userGameData
}
console.log(userFunc)


// 9. Make a copy of your new user object but override the birthday to december 31st
 
const userFunc2 = {
    ...userFunc,
    birthday: 'dec 31st'
}
console.log(userFunc2)

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

const accomplishments = [...userFunc2.accomplishments]
console.log(accomplishments)

//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
 };

const {food} = user.favoriteThings
console.log(food)


 
// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //

const [food1, food2] = food
console.log(food1, food2)


// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];

const [name, age, ...food3] = data
console.log(name, age, food3)

// 14. use object destructuring to grab the following from the userInfo object: 
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: 'Peter',
  favorites: {
    needs: {
      food:  ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
    },
    wants: {
      things: ['cars', 'jewelry'],
    },
  },
};

var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


module.exports =  fetchData;

const {name: userName, favorites: {needs: {food: favoriteFood}, wants: {things: [favoriteThing, secondFavoriteThing]}}} = userInfo
console.log(userName, favoriteFood, favoriteThing, secondFavoriteThing)

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});

  

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetchData().then(data => console.log(data)).catch(error => console.log('Error!'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fetchDataAsync = async () => {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fetchDataAsync();
