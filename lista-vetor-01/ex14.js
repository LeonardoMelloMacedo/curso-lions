let a = [1, 2, 3, 4, 5, 6, 7, 8]
let s = 7;
let qtd  = 0

for (let i = 0; i < a.length; i++) {
    if (a[i] === s){ 
    qtd++
    break
    }
}
console.log(qtd);