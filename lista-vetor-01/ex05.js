let numbs = [1, 2, 3, 4, 5, 6];
let maior = numbs[0];
for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] > maior) {
        maior = numbs[i]
    }
}
console.log(maior)