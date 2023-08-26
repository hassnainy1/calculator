import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "num1",
        message: "kindly enter first digit ",
        type: "number",
    },
    {
        name: "num2",
        message: "kindly enter second digit",
        type: "number",
    },
    {
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
        message: "select operator",
    },
]);
const { num1, num2, operator } = answers;
if (num1 && num2 && operator) {
    let result = 0;
    if (operator === "subtraction") {
        result = num1 - num2;
    }
    else if (operator === "addition") {
        result = num1 + num2;
    }
    else if (operator === "division") {
        result = num1 / num2;
    }
    else if (operator === "multiplication") {
        result = num1 * num2;
    }
    console.log("your answer is :", result);
}
else {
    console.log("kindly enter valid  number");
}
