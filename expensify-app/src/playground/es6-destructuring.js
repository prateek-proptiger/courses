const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'New York',
        temp: 36
    }
}

const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}`);

const { city, temp: temperature } = person.location;
console.log(`Its ${temperature} in ${city}`);

const address = ['Jupiter Street', 'Philadelphia', 'Pennsylvania', '19417'];
const [ street, cityName, state, zip ] = address;
console.log(`You are in ${cityName} ${state}`);