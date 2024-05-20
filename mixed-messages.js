
const prompt = require('prompt-sync')();

const name = prompt(`What is your name? : > `);

console.log(`\n`);

const rand = () => Math.floor(Math.random()*3)//Random number from 0 inclusive,  to 3 exclusive.
let rand1 = rand();
//console.log(`rand1 is: ${rand1} this time around`)

switch (rand1) {//Reply based on the random number
case 0: console.log(`What a funky name, ${name}! Don't you think? \n`);
break
case 1: console.log(`That's a great name, ${name}! I knew someone called ${name} that person still owes me money \n`);
break
case 2: console.log(`Never heard of anyone called, ${name}! Thanks for increasing my names knowledge \n`);
break
}

const place = prompt(`Tell me where are you from ${name}?`)

console.log(`\n`);

let rand2 = rand();
//console.log(`rand2 is: ${rand2} this time around`)

switch (rand2) {//Reply based on the random number
case 0: console.log(`I've never heard of ${place}. How is it like over there? Tell me about your home ${name} \n`);
break
case 1: console.log(`What really? Are we talking about the same ${place}? What do people do there ${name}? \n`);
break
case 2: console.log(`Woow I never knew about ${place}!  Do you have any story about its people, ${name}? \n`);
break
}

const userPlaceAnswer = prompt(`(write about your home: ${place}) :> `)

console.log(`\n`);

let rand3 = rand();
//console.log(`rand3 is: ${rand3} this time around`)

switch (rand3) {//Reply based on the random number
case 0: console.log(`${place}, looks like a beautiful place to visit based on your answer: ${userPlaceAnswer}. \n 
I can't wait to visit there and do what the locals do! \n`)
break
case 1: console.log(`${place}, seems interesting based on: ${userPlaceAnswer}. \n 
Lets go together some time! \n`)
break
case 2: console.log(`${place}, it seems alright.  If I really understood your answer: ${userPlaceAnswer}. \n 
Then what are we waiting for to go?! \n`)
break
}

