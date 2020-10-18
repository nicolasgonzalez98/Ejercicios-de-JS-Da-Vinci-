var valorHora=prompt('Ingrese el valor de la hora')
var cantHora=prompt('Ingrese la cantidad de horas trabajadas')
var antiguedad=prompt('Ingrese su antiguedad')

var sueldoMes=valorHora*cantHora
var sueldoYear=sueldoMes*12
var totalMes=sueldoMes+0.05*sueldoMes*antiguedad
var totalYear=sueldoYear+0.05*sueldoYear*antiguedad

