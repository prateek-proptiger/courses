const square = function(x) {
    return x*x;
}

console.log(square(2));

const squareArrow = (x) => {
    return x*x;
}
console.log(squareArrow(3));

const squareArrow2 = (x) => x*x;
console.log(squareArrow2(4));

/* All arrow functions are anonymous */
/* 'arguments' object and 'this' are no longer bound to arrow function */

const add = function (a, b) {
    console.log(arguments);
    return a + b;
}

const addArrow = (a, b) => {
    // console.log(arguments); - Error
    return a + b;
}

console.log(add(2, 3));
console.log(addArrow(2, 3));

const user = {
    name: 'Andrew',
    cities: ['New York', 'Deblin'],
    printPlacesLived: function() {
        /* Can remove 'function' keyword here as well */
        /* If we change to arrow function this.cities will break */

        /* this.cities.forEach(function(city) {
            console.log(`${this.name} has lived in ${city}`);
        }); - Error */

        // Sol - I
        const that = this;
        that.cities.forEach(function(city) {
            console.log(`${that.name} has lived in ${city}`);
        });

        // Sol - II
        this.cities.forEach(city => {
            console.log(`${this.name} has lived in ${city}`);
        });
    }
}

user.printPlacesLived();