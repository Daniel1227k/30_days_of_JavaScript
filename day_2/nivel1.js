// Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
let challenge = '30 days of JavaScript';

// Imprima la cadena en la consola del navegador usando console.log()
console.log(challenge);

// Imprima la longitud de la cadena en la consola del navegador usando console.log()
console.log(challenge.length);

// Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()
console.log(challenge.toUpperCase());

// Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
console.log(challenge.toLowerCase());

// Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
console.log(challenge.substring(0, 2));

// Corta la frase Days Of JavaScript de 30 Days Of JavaScript.
console.log(challenge.substring(3, 8));

// Verifique si la cadena contiene una palabra Script usando el método includes()
console.log(challenge.includes('Script'));

// Divide la cadena en un array usando el método split()
console.log(challenge.split(''));

// Divida la cadena 30 días de JavaScript en el espacio usando el método split()
console.log(challenge.split(' '));

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));

// Cambie 30 días de JavaScript a 30 días de Python usando el método replace().
console.log(challenge.replace('JavaScript', 'Python'));

// ¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
console.log(challenge.charAt(15));

// ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
console.log(challenge.charCodeAt('J'));

// Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
console.log(challenge.indexOf('a'));

// Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
console.log(challenge.lastIndexOf('a'));

// Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let exampleSentence =
  'No puedes terminar una oración con porque porque porque es una conjunción';
console.log(exampleSentence.indexOf('porque'));

// Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(exampleSentence.lastIndexOf('porque'));

// Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(challenge.search(/porque/));

// Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.
console.log(challenge.trim());

// Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(challenge.startsWith('30'));

// Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(challenge.endsWith('t'));

// Usa el método match() para encontrar todos los a en 30 días de JavaScript
console.log(challenge.match(/a/g));

// Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
console.log('30 días de '.concat('JavaScript'));

// Use el método repeat() para imprimir 30 días de JavaScript 2 veces
console.log(challenge.repeat(2));
