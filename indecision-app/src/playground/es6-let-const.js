var nameVar = 'Prateek';
nameVar = 'Sehgal';
var nameVar = 'Mike';
console.log('nameVar', nameVar);
/* Can assign new values to the variable and can declare again as well. */

let nameLet = 'Andrew';
nameLet = 'Mead';
// let nameLet = 'Andrew'; - Error
console.log('nameLet', nameLet);
/* Can assign new values to the variable but can't declare again. */

const nameConst = 'Steven';
// nameConst = 'Grinder'; - Error
console.log('nameConst', nameConst);
/* Can't assign new values to the variable and can't declare again as well. */


function getPetName() {
    var petName = 'Pal';
    return petName;
}

getPetName();
// petName; - Error
/* 'var' variables are 'function' scoped */

/* Along with 'function', 'let' and 'const' variables are 'block' scoped as well */

var fullName = 'Prateek Sehgal';
// let firstName = fullName.split(' ')[0];

if (fullName) {
    var firstName = fullName.split(' ')[0];
    // let firstName = fullName.split(' ')[0]; - Error 2nd Time
    // const firstName = fullName.split(' ')[0]; - Error 2nd Time
    console.log(firstName);
}

console.log(firstName);