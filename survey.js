const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const answers = [];
rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
    answers.push(answer);
    rl.question("What's an activity you like doing?", (answer) => {
        answers.push(answer);
        rl.question("What do you listen to while doing that?", (answer) => {
            answers.push(answer);
            rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
                answers.push(answer);
                rl.question("What\'s your favourite thing to eat for that meal?", (answer) => {
                    answers.push(answer);
                    rl.question("Which sport is your absolute favourite?", (answer) => {
                        answers.push(answer);
                        rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
                            answers.push(answer)
                            const [myName, favoriteActivity, favoriteMusic, favoriteMeal, favoriteSides, favoriteSport, amazingAt] = answers
                            let print = `My name is ${myName}. I would like ${favoriteActivity}, listening to ${favoriteMusic}, and eating ${favoriteMeal} with ${favoriteSides}. Furthermore, I'm fan of ${favoriteSport} and literally superpower at ${amazingAt}`;
                            console.log();
                            console.log(print);
                            rl.close();
                        });
                    });
                });
            });
        });
    });
});