const obj = {a: 3, b: 7, c: 11, soma() {a + b + c}};
console.log(JSON.stringify(obj)); // Converte um valor de JS para JSON

console.log(JSON.parse('{ "a": 2, "b": 4, "c": 6 }')); // Converte um valor de JSON para JS (esta é a notação do JSON)