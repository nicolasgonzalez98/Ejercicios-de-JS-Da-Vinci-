i=0;

while (i<15){
    num=parseInt(prompt('Ingrese un numero'));
    if (num%3==0 && num%5==0){
        alert('Es multiplo de 3 y 5');
    }else if(num%3==0){
        alert('Es multiplo de 3')
    }else if (num%5==0){
        alert('Es multiplo de 5')
    }else{
        alert('No es multiplo ni de 3 ni de 5')
    }
    i+=1
}

