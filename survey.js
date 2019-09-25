const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("What's your name? Nicknames are also acceptable :)", (myName) => {
    rl.question("What's an activity you like doing?", (favoriteActivity) => {
        rl.question("What do you listen to while doing that?", (favoriteMusic) => {
            rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (favoriteMeal) => {
                rl.question("What\'s your favourite thing to eat for that meal?", (favoriteSides) => {
                    rl.question("Which sport is your absolute favourite?", (favoriteSport) => {
                        rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (amazingAt) => {
                            let print = `My name is ${myName}. I would like ${favoriteActivity}, listening to ${favoriteMusic}, and eating ${favoriteMeal} with ${favoriteSides}. Furthermore, I'm fan of ${favoriteSport} and literally superpower at ${amazingAt}`;
                            console.log(print);
                            rl.close();
                        });
                    });
                });
            });
        });
    });
});