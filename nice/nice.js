const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout});

console.log("Я крутой! (слово 'стоп' - выход)")

rl.on('line', (input) =>
    {
        if (input === "стоп") {
            console.log("Пока!");
            rl.close();
        } else {
            console.log("Ты написал:", input);
        }
    }
)
