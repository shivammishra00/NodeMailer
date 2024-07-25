const  generator = require('generate-password');
// console.log(generator)

const password = generator.generate({
    length: 20,
    numbers: true,
    symbols: true,
    lowercase: true,
    uppercase: true,
    exclude: ["@", "`", "^", "#"]
})

console.log(password)