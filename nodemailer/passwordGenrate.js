/////======   automatic password genrate kar sakte hi   ======//
const  generator = require('generate-password');
// console.log(generator)

const password = generator.generate({   /// genrate method hai jo object accept karti hai 
    length: 20,
    numbers: true,
    symbols: true,
    lowercase: true,
    uppercase: true,
    exclude: ["@", "`", "^", "#"]
})

console.log(password)