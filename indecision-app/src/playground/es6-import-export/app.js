import validator from 'validator';
import subtract, { add, square } from './utils';

console.log(square(4));
console.log(add(34, 57));
console.log(subtract(42, 29));
console.log(validator.isEmail('abcd'));
console.log(validator.isEmail('abcd@mail.com'));