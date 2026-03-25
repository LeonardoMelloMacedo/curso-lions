let numbs = [1,2,3,4,5,6];
let menor = numbs[0];
for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] < menor){
        menor = numbs[i]
}
}
console.log(menor)