i=0

while (i<10){
    num=parseInt(prompt('Ingrese un numero'));
    if (num==0){
        alert('Es cero');
    }else if (num%2==0){
        alert('Es par');
    }else{
        alert('Es impar')
    };
    i+=1
}