//Escrever, com for ou while, qual número é par e qual número é impar do 0 ao 50.
let i = 0;

for (i = 0; i <= 50; i++){
    if (i % 2 == 0){
        console.log(`Par: ${i}`);
    } else {
        console.log(`Impar: ${i}`);
    }
}

while(i <= 50){
    if (i % 2 == 0){
        console.log(`Par: ${i}`);
    } else {
        console.log(`Impar: ${i}`);
    }
    i++;
}