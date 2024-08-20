/**Crie uma função que avalia uma expressão matemática simples representada como uma string.
* A expressão pode conter números inteiros e os operadores +, -, *, e /. Não é permitido usar a função eval(). 

Exemplo:
Para a expressão "3+5*2-4/2", o resultado deve ser 10.
Passos para resolver:
Parsethe String:
Converta a string em uma forma que você possa processar os números e operadores separadamente.

Processar Operadores:
Como * e / têm precedência maior que + e -, você deve tratar esses operadores primeiro.

Calcular o Resultado:
Após processar a multiplicação e a divisão, prossiga com a soma e a subtração.
*/
function evaluateExpression(expression) {
    let nums = [];
    let ops = [];
    let i = 0;

    while (i < expression.length) {
        let char = expression[i];
        
        if (!isNaN(char)) {
            let num = 0;
            while(i < expression.length && !isNaN(expression[i])) {
                num = num * 10 + parseInt(expression[i]);
                i++;
            }
            nums.push(num);
            continue;
        }

        if (char === '+' || char === '-' || char === '*' || char === '/') {
            while (ops.length > 0 && precedence(ops[ops.length - 1]) > precedence(char)) {
                let operator = ops.pop();
                let b = nums.pop();
                let a = nums.pop();
                nums.push(applyOperation(a, b, operator));
            }
            ops.push(char);
        }
        i++;
    }

    while (ops.length > 0) {
        let operator = ops.pop();
        let b = nums.pop();
        let a = nums.pop();
        nums.push(applyOperation(a, b, operator));
    }

    return nums.pop();
}

function precedence(op) {
    if (op === '+' || op === '-') {
        return 1;
    } else if (op === '*' || op === '/') {
        return 2;
    }
    return 0;
}

function applyOperation(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return Math.floor(a / b);
    }
    return 0;
}

const expression = "3+5*2-4/2";
console.log(evaluateExpression(expression));