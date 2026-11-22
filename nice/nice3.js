const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout});

let products = ["Хлеб", "Молоко", "Сыр"];

console.log("=== Товары ===");
console.log(products);
console.log("1 - добавить, 2 - удалить, 3 - показать, 4 - выход")

rl.on('line', (input) => {
    switch (input) {
        case "4":
            console.log("Пока!");
            rl.close();
            break;
    
        case "3":
            console.log(products);
            break;

        case "1":
            rl.question("Новый товар: ", (item) =>{
                products.push(item);
                console.log(products[0]);
            });
            break;
        case "2":
            rl.question("Номер для удаления: ", (num) => {
            let idx = Number(num);
            products.splice(idx, 1);
            console.log(products);
        });
            break;
        case "5":
            rl.question("Какой индекс хотите получить?: ", (num) => {
            let idx = Number(num);
            console.log(products[num]);
            });
        break;

        case "6":
            rl.question("Какой продукт хотите: ", (num) => {
                let idx = Number(num) - 1;
                console.log(products[idx]);
            });
            break;
    }
})