function hitungJumlahKata(kalimat) {
  // you can only write your code here!
var temp = ''
var result = []

for (var i=0;i<kalimat.length;i++){
    if (kalimat[i] !== ' '){
        temp+= kalimat[i]
    } else {
        result.push(temp)
        temp = ''
    }
}
result.push(temp)
return result.length
}
// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5



// function hitungJumlahKata(kalimat) {
// var temp = kalimat
// var result = []
// result.push(temp)
// return(result)
// }
// // TEST CASES
// console.log(hitungJumlahKata('I have a dream')); // 4
// console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
// console.log(hitungJumlahKata('A song to sing')); // 4
// console.log(hitungJumlahKata('I')); // 1
// console.log(hitungJumlahKata('I believe I can code')); // 5