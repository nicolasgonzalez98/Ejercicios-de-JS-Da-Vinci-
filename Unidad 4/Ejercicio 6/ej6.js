var operadores=['+','-','*','/','%'];
var num1=parseInt(prompt('Ingrese el primer numero'));
var num2=parseInt(prompt('Ingrese el segundo numero'));
var ope=prompt('Ingrese el operador (+, -, *, /,%).');

while (operadores.includes(ope)==false){
    var ope=prompt('Ingrese el operador (+, -, *, /,%).');
};

switch(ope){
    case '+':
        res=num1+num2;
        break;
    case '-':
        res=num1-num2;
        break
    case '*':
        res=num1*num2;
        break
    case '/':
        res=num1/num2
        break
    case '%':
        res=num1%num2
}

alert(res)

