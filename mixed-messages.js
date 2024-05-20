
const prompt = require('prompt-sync')();

const name = prompt(`What is your name? : > `);

console.log(`\n`);

console.log(`What a funky name, ${name}! Don't you think? \n`);

const place = prompt(`Tell me where are you from ${name}?`)

console.log(`\n`);

console.log(`I've never heard of ${place}. How is it like over there? Tell me about your home ${name} \n`)

const userPlaceAnswer = prompt(`(write about your home: ${place}) :> `)

console.log(`\n`);

console.log(`${place}, looks like a beautiful place to visit based on your answer: ${userPlaceAnswer}. \n 
I can't wait to visit there and do what the locals do! \n`)

