/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startConversation() {
    rl.question('What is your name? ', name => {
      console.log(`What a funky name, ${name}! Don't you think?`);
      
      rl.question(`Tell me where are you from ${name}? `, place => {
        console.log(`I've never heard of ${place}. How is it like over there?`);
  
        // You can continue the conversation by asking more questions or responding to the user's input
  
        // Ask if the user wants to continue the conversation
        rl.question('Would you like to continue the conversation? (yes/no) ', answer => {
          if (answer.toLowerCase() === 'yes') {
            // If the user wants to continue, start the conversation again recursively
            startConversation();
          } else {
            // If the user doesn't want to continue, close the readline interface
            console.log('Goodbye!');
            rl.close();
          }
        });
      });
    });
  }
  
  // Start the conversation
  startConversation();*/

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

