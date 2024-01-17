//Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.
let firstName = 'Daniel';
let lastName = 'Cruz';
let country = 'Mexico';
let city = 'Xalapa';
let age = 21;
let isMarried = false;
let year = new Date().getFullYear;

//Verifique si typeof '10' es igual a 10
console.log(typeof '10' === 10);

//Verifique si parseInt('9.8') es igual a 10
console.log(parseInt('9.8') === 10);

//Verifique cualquier valor booleano true o false.
console.log(typeof (3 > 2));

//Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
console.log(3 !== 2);
console.log('daniel'.length > 'luis'.length);
console.log(age > 18);

//Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
console.log(firstName.length < lastName.length);

/*
Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
*/

/*
Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
No hay 'on' tanto en dragon como en python
*/

/*
Utilice el objeto Date para realizar las siguientes actividades

¿Qué año es hoy?
¿Qué mes es hoy con un número?
¿Qué fecha es hoy?
¿Qué día es hoy con un número?
¿Cuál es la hora actual?
¿Cuántos minutos hay actualmente?
Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.*/
