
// Ejercicio 1
// parte.1
// push
let water = [];
hot = "summer", freeze ="winter";
water.push(hot, freeze);
// unshift
water = ["summer", "winter"];
halfCold="spring", mediumHot="autumn";
water.unshift("spring", "autumn");
// pop
water=['spring', 'autumn', 'summer', 'winter'];
water.pop();

// shift
water=['spring', 'autumn', 'summer'];
water.shift();
console.log(water);
// parte.2
const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"];
console.log(names.slice(1,3));
names.splice(3,1,"Parma");
console.log(names);
//parte.3
const namesTwo = names.join(" ");
console.log(namesTwo);
//parte.4
const sentence="El perro de San Roque no tiene rabo"

//A continuación, conviértela en un array de palabras, y luego en otro de letras.

// Ejercicio.2
// parte.1
let months = ["January", "February", "Marj", "April", "Mei"];
months.splice(2, 3, 'March',),months.splice(4,3,'May'); 
console.log(months);
// parte.2
let newMonths = ["June", "July", "August", "September"];
totalMonths = months.concat(newMonths);
console.log(totalMonths);
// parte.3
totalMonths=['January', 'February', 'March', 'May', 'June', 'July', 'August', 'September'];
const more = totalMonths.push("October", "November", "December");
console.log(totalMonths);

// Ejercicio.3
let num1=9;
let num2=7;
let num3=5;
// Escribe un condicional en el que:
if (num1>num2)
{
  "elimine el último elemento del array"
  
  ;  
}
    
else if (num2>num3 && num2<10) {
    console.log("elimine el primer elemento del array");
}
 else if (num2>num3 | num2>num1) {
console.log("añada el string October al final del array");    
 } 
 else {    
 console.log("Bad luck!");}

// Ahora dale los siguientes valores a num1, num2 y num3, y comprueba los resultados:

// num1 = 9, num2 = 7, num3 = 5
// debe dar como resultado
// num1 = 4, num2 = 7, num3 = 5
// debe dar como resultado
// num1 = 5, num2 = 24, num3 = 8
// debe dar como resultado
// num1 = 7, num2 = 7, num3 = 7
// debe dar como resultado "Bad luck!"

// Ejercicio.4

// Dado el siguiente array: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']:

// Encuentra la posición del string "Wednesday" y si la longitud de ese string es mayor que el número de su posición, dale la vuelta al array.
// Compara la longitud de los elementos en primera y segunda posición, y si el primero es más corto que el segundo, muestra los tres primeros elementos del array (usa el método apropiado para cortar un trozo del array).
// Comprueba si el array incluye el string Sunday. Si es así, print "That's nice!", si no, print "Oh no!" y añade "Sunday" al final del array.

// Ejercicio.5

// Escribe un script que le dé la vuelta a cualquier array. Usa primero el método de array apropiado para ello, y después inténtalo sin usar ningún método, sólo con un bucle for.

//.Ejercicio 6

let numbers=[];

for (let j=0; j<=10; j++) {
  numbers.push(j)
}

console.log(numbers);
let result = 0;
for (let i = 0; i <numbers.length; i++)
result += numbers[i];
console.log(result);
let evens=[];
let odd=[];

if (numbers[i]%2===0){
  evens.push(numbers[i])
}
else
odd.push(numbers[i]);
console.log(evens);
console.log(odd);


// Ejercicio.7

// Dados estos dos arrays:

// const fruits = ["pera", "banana", "mandarina", "frambuesa"];
// const colors = ["verde", "amarilla", "naranja", "roja"];
// Crea un programa que muestr por consola cada fruta con su color siguiendo el siguiente modelo:

// "La pera es verde"
// "La banana es amarilla"
// etc.

// Ejercicio 8

// Dado el siguiente array bidimensional:

// const array = [["David", "Fernández"], ["Ana", "García"], ["Manuel", "Herrera"]];
// Escribe un programa que, usando bucles for, devuelva un array unidimensional con el nombre y apellidos de cada persona en un único string:

// ["David Fernández", "Ana García", "Manuel Herrera"]

// Ejercicio.9

const grades = [5, 7, 7, 4, 8, 5, 3, 9];
// Calcula la media del siguiente array, y redonde su resultado a la baja: