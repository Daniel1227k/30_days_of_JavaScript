// Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.

// Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.
console.log(Math.round(9.8) === 10);

// Verifique si 'on' se encuentra tanto en Python como en la jerga

// Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración.

// Genere un número aleatorio entre 0 y 100 inclusive.
console.log(Math.floor(Math.random() * 101));

// Genere un número aleatorio entre 50 y 100 inclusive.
console.log(Math.floor(Math.random() * 51) + 50);

// Genere un número aleatorio entre 0 y 255 inclusive.
console.log(Math.floor(Math.random() * 256));

// Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
let js = 'JavaScript';
let random = Math.floor(Math.random() * js.length);
console.log(js[random]);
