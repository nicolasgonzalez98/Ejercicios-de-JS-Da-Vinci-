num1=parseInt(prompt('Ingrese el primer lado del triangulo'));
num2=parseInt(prompt('Ingrese el segundo lado del triangulo'));
num3=parseInt(prompt('Ingrese el tercer lado del triangulo'));

if (num1==num2 && num1==num3){
    alert('Son equilateros.')
}else if (num1==num2 || num1==num3){
    alert('Es un triangulo isosceles.');
}else{
    alert('Es un triangulo escaleno')
};