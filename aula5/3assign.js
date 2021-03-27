//  Copia as propriedades de um objeto em outro, mantendo, porém, as características do segundo.

let objeto1 = {
    caracteristica1: "vermelho",
    caracteristica2: "verde"
}

let objeto2 = {
    /* chave: */ caracteristica3: /* valor: */ "azul",
    /* chave: */ caracteristica4: /* valor: */ "amarelo"
}

Object.assign (objeto1, objeto2);

console.log(objeto1);
console.log(objeto2);

//  Para imprimir as chaves do objeto:

console.log(Object.keys(objeto2));