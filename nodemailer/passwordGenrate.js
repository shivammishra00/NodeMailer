/////======   automatic password genrate kar sakte hi   ======//
////  ye java script ki functionality hai ise hum frontend side use kar sakte hai //

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