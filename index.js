// Write your code in this file!

const currentUser = 'Dude';

// console.log(`${currentUser}`)

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// console.log(`${welcomeMessage}`)

const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;

// console.log(`${excitedWelcomeMessage}`)

const firstInitial = currentUser.slice(0, 1);
const shortGreeting = `Welcome, ${firstInitial}!`;

console.log(`${shortGreeting}`)
