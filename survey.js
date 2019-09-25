const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = ["What's your name? Nicknames are also acceptable :)", "What's an activity you like doing?", "What do you listen to while doing that?", "Which meal is your favourite (eg: dinner, brunch, etc.)", "What\'s your favourite thing to eat for that meal?", "Which sport is your absolute favourite?", "What is your superpower? In a few words, tell us what you are amazing at!"];
const questionnaire = (questions) => {
    const answers = [];
    for (const inquery of questions) {
        rl.question(inquery, (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            answers.push(answer);
            rl.close();
        });
    }
}

questionnaire(questions);