arr = [1, 3, 2, 5, 7, 4, 5, 9, 12, 18, 17];

// câu a tổng của mảng 
let sum = arr.reduce((a, b) => a + b, 0);
console.log("Tổng của mảng là: " + sum);

// câu b tìm phần tử lớn nhất bé nhất của mảng
let max = Math.max(...arr);
let min = Math.min(...arr);
console.log("Phần tử lớn nhất là: " + max);
console.log("Phần tử nhỏ nhất là: " + min);

var first=arr[0]
// for(i = 0; i< arr.length ; i++){
//     if ( arr(i) > first ){
//         first = arr[i];
//     }
// }

// var smallest = arr[0]
// for(i= 0 ; i< arr.length ; i++){
//     if (arr(i) < smallest)
//         smallest = arr[i]
// }

// c đảo ngược mảng 
arr.reverse();
console.log("Mảng sau khi đảo ngược là: " + arr);


// d loại bỏ phần tử trùng nhau trong mảng
arr.reverse();
console.log("Mảng sau khi đảo ngược là: " + arr);


// e tìm số chẵn và lẽ 
let sole = arr.filter(num => num % 2 !== 0);
let sochan = arr.filter(num => num % 2 === 0);
console.log("Các số lẻ trong mảng là: " + sole);
console.log("Các số chẵn trong mảng là: " + sochan);