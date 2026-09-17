let tableRows = "";
let validResults = [];

//style for the calculator
document.write("<style>");
document.write("table { border-collapse: collapse; margin-bottom: 20px; font-family: sans-serif; }");
document.write("th, td { border: 1px solid black; padding: 8px 15px; text-align: center; }");
document.write("th { background-color: orange; font-weight: bold; }");
document.write("td { background-color: #fdf6e3; }");
document.write("</style>");

//loop that handles logic for calculator input
while (true) {
    let inputX = prompt("Enter first number:");
    if (inputX === null) break;
    
    let operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator === null) break;
    
    let inputY = prompt("Enter second number:");
    if (inputY === null) break;

    let x = parseFloat(inputX);
    let y = parseFloat(inputY);
    let result;

    // handles the logic for incorrect calculator input
    if (isNaN(x) || isNaN(y)) {
        result = "wrong input number";
    } else {
        if (operator === "+") {
            result = x + y;
            validResults.push(result);
        } else if (operator === "-") {
            result = x - y;
            validResults.push(result);
        } else if (operator === "*") {
            result = x * y;
            validResults.push(result);
        } else if (operator === "/") {
            result = x / y;
            validResults.push(result);
        } else if (operator === "%") {
            result = x % y;
            validResults.push(result);
        } else {
            result = "computation error";
        }
    }
    // the table construction
    tableRows += "<tr><td>" + inputX + "</td><td>" + operator + "</td><td>" + inputY + "</td><td>" + result + "</td></tr>";
}

//style for the calculator table
document.write("<table>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");
document.write(tableRows);
document.write("</table>");