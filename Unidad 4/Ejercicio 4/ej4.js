var num1=parseInt(prompt('Ingrese el primer numero'))
var num2=parseInt(prompt('Ingrese el segundo numero'))
var num3=parseInt(prompt('Ingrese el tercer nombre'))

if (num1>num2&&num1<num3){
    var total=num1*num2*num3
    alert(total)
}else{
    suma=num1+num2+num3
    alert(suma)
    if (suma%2==0){
        alert('Es par')
    }else{
        alert('Es impar')
    }
}