// For...of
//split()
// function
//sort();
// map();
// join(); slice(); reverse();

// Bài tập Session 4
// Luyện tập Array

// 1. Cho người dùng nhập vào 2 số x, y
// a. Tạo một mảng với các số từ x - y cách nhau 2 đơn vị
// b. Tính trung bình cộng các số trong mảng

// let x = Number(prompt('Nhập số x = '));
// let y = Number(prompt('Nhập số y = '));
// let arr = [];
// let tong = 0;
// if(x < y){
//     for(let i = x; i <= y ; i+=2){
//         arr.push(i);
//         tong = tong + i;
//     }
// } else {
//     let TG = x;
//     x = y;
//     y = TG;
//     for(let i = x; i <= y ; i+=2){
//         arr.push(i);
//         tong = tong + i;
//     }
// }
// console.table(arr);
// let TB = tong/arr.length;
// console.log(`Trung bình cộng các số là: ${TB}`);

// 2. Cho người dùng nhập vào 1 dãy số dạng string (VD: 1,2,3,4,5)
// a. Biến chuỗi đó thành mảng                                              
// b. Tính tổng các số chẵn trong mảng, Tính tổng các số lẻ trong mảng
// c. Tìm max, min của các số trong mảng đó

// let arr = [];
// let str = prompt("Nhập dãy số bất kỳ (1,2,3,4,5...):");
// let ar = str.split(",");   // mảng chuỗi ["1", "2", "3", ...]
// for( i = 0; i < ar.length ; i++){
//     arr.push(Number(ar[i]));        //mảng số [1, 2, 3, 4, ....]
// }
// console.log(arr);
//b.
// let tongChan = 0;
// let tongLe = 0;
// for(let j = 0; j < arr.length; j++){
//     if(arr[j] % 2 === 0 ){
//         tongChan = tongChan + arr[j];
//     } else {
//         tongLe +=  arr[j];
//     }
// }
// console.log(`Tổng các số chẵn trong mảng: ${tongChan}`);
// console.log(`Tổng các số lẻ trong mảng: ${tongLe}`);

//c.
// let max = arr[0];
// let min = arr[0];
// for(let j1 = 1; j1 < arr.length ; j1++){
//     if(max < arr[j1])
//         max = arr[j1];
//     if(min > arr[j1])
//         min = arr[j1];
// }
// console.log(`Max của dãy số là: ${max}`);
// console.log(`Min của dãy số là: ${min}`);

//Cách 2: 
// arr.sort(function(a, b){
//     return a - b;
// })
// console.log(`Max của dãy số là: ${arr[arr.length -1 ]}`);
// console.log(`Min của dãy số là: ${arr[0]}`);


// 3. Cho mảng [1, 2, 4, 6, [3, 5], [10, 12]]
// a. Tính tổng tất cả các phần tử trong mảng
// b. Tạo ra 1 mảng mới chỉ là 1 mảng đơn(không chứa mảng khác ở trong) 
// chứa tất cả các phần tử đã được tăng lên 10 đơn vị

// let arr = [1, 2, 4, 6, [3, 5], [10, 12]];
// let str = arr.toString();
// arr = str.split(",");
// let a = [];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     let item = Number(arr[i]);
//     a.push(item);
//     sum = sum + item;
// }
// console.log(a);
// console.log(`Tổng tất cả các phần tử trong mảng là: ${sum}`);
// //b. Phương thức map(): ạo ra một mảng mới với các phần tử là kết quả từ việc thực thi một hàm lên từng phần tử của mảng được gọi
// a = a.map(x => x + 10);                                      
// console.log(`Mảng mới là: ${a}`);

// 4. Cho người dùng nhập vào 1 dãy số dạng string (VD: 1,2,2,1,3,3,4)
// a. Biến chuỗi đó thành mảng
// b. Tạo ra 1 mảng mới gồm các phần tử của mảng cũ không được lặp lại 2 lần.
// VD [1,2,3,3] => [1,2,3]

// let arr = [];
// let str = prompt("Nhập dãy số nguyên:");
// let ar = str.split(","); 
// for( i = 0; i < ar.length ; i++){
//     arr.push(Number(ar[i]));  
// }
// console.log(arr);
// //b.
// let arr2 = [];
// for ( let j = 0; j < arr.length; j++){
//     if(arr2.indexOf(arr[j]) === -1)
//         arr2.push(arr[j]);
// }
// console.log(`Mảng mới (không lặp) là: ${arr2}`);

// 5. Cho người dùng nhập vào 1 câu bất kỳ, Biến câu đó thành 1 câu in hoa tất cả các chữ cái đầu tiên 
// VD: input = "my name is peter" => output = "My Name Is Peter"

// let userInput = prompt("Nhập chuỗi bất kỳ:").toLowerCase();;
// console.log(userInput);
// let words = userInput.split(" ");
// console.log(words);
// let result = "";
// for(let i = 0; i < words.length; i++){
//     let word = words[i];
//     let letters = word.split("");
//     console.log(letters);
//     letters[0] = letters[0].toUpperCase();
//     let newWord = letters.join("");
//     console.log(newWord);
//     result = result + newWord + " ";
// }

// console.log(result);

// 6. Cho người dùng nhập vào số n,
// Cho người dùng nhập vào 1 string dạng 1,2,3,4,5
// a. Biến string đó thành mảng
// b. Tạo ra 1 mảng mới gồm n phần tử đầu tiên của mảng cũ

// let arr = [];
// let str = prompt("Nhập dãy số:");
// let ar = str.split(","); 
// for( i = 0; i < ar.length ; i++){
//     arr.push(Number(ar[i]));  
// }
// console.log(arr);
// // b.
// let n = Number(prompt("Nhập n ="));
// let newArr = arr.slice(0,n);  // sao chép một mảng
// console.log(`Mảng mới: ${newArr}`);

// 7. Cho người dùng nhập vào số n,
// Cho người dùng nhập vào 1 string dạng 1,2,3,4,5...
// a. Biến string đó thành mảng
// b. Nhóm mảng cũ thành một mảng mới gồm các mảng con theo n
// VD: [1,2,3,4,5], n = 2 => [[1,2],[3,4], [5]]
//     [1,2,3,4,5,6], n = 3 => [1,2,3],[4,5,6]]

// let arr = [];
// let str = prompt("Nhập dãy số:");
// let ar = str.split(","); 
// for( i = 0; i < ar.length ; i++){
//     arr.push(Number(ar[i]));  
// }
// console.log(arr);
// // b.
// let n = Number(prompt("Nhập n là kích thước mảng con:"));
// let result = [];
// for (let i = 0; i < arr.length; i += n) {
//     let newArr = arr.slice(i,  i + n);
//     result.push(newArr);
// }
// console.log(result);

// 8. Cho người dùng nhập vào string dạng 1,2,3,4,5,6
// a. Biến string đó thành mảng
// b. Tìm giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong mảng đó => hieu = max - min
// Ví dụ:
// Input: [1, 2, 3, 8, 9]
// Output: 8 (là hiệu của 9 và 1)

// // a.
// let arr = [];
// let str = String(prompt('Nhập chuỗi số nguyên:'));
// let ar = str.split(","); 
// for( i = 0; i < ar.length ; i++){
//     arr.push(Number(ar[i]));  
// }
// console.log(arr);

// // b.
// arr.sort(
//     function(a,b){
//         return a-b;
//     }
// )
// console.log(`Mảng đã sắp tăng dần ${arr}`);
// let subMax = arr[arr.length -1]-arr[0];
// console.log(`${subMax} là hiệu của ${arr[arr.length -1]} và ${arr[0]}`);

// 9. Cho người dùng nhập vào string dạng 1,2,3,4,5,6
// a. Biến string đó thành mảng
// b. Tìm các số có số lần lặp lại nhiều nhất trong mảng đó
// Ví dụ:
// Input: [1,2,3,4,1,2,2,1]
// Output: [1,2]

//a. 
// let arr = [];
// let str = String(prompt('Nhập chuỗi số nguyên:'));
// let ar = str.split(","); 
// for( i = 0; i < ar.length ; i++){
//     arr.push(Number(ar[i]));  
// }
// console.log(arr);
// // b.
// function mode(array) {
//     if (array.length == 0)
//         return null;
//     let max = [];
//     let obj = {};
//     let most = 0;
//     for (let i = 0; i < array.length; i++) {
//         let el = array[i];
//         if (obj[el]==null) {
//             obj[el] = 1;
//         } else {
//             obj[el]++;
//         }

//         if (obj[el] > most) {
//             most = obj[el];
//             max = [el];
//         } else if (obj[el] === most) {
//             max.push(el);
//         }
//     }

//     return max;
// }
// console.log(mode(arr));

// // Cách 2:
// let input = prompt("Nhap vao chuoi so: ");
// let arr = input.split(",");
// let len = arr.length;
// for (let i = 0; i < len; i++) {
//   arr[i] = parseInt(arr[i], 10);
// }
// arr.sort(function (a, b) {
//   return a - b;
// });
// let min = arr[0];
// let max = arr[len - 1];
// let checkArr = [];
// for (let i = min; i <= max; i++) {
//   checkArr[i] = 0;
// }
// for (let i = 0; i < len; i++) {
//   let tmp = arr[i];
//   checkArr[tmp]++;
// }
// let finalArr = [];
// let max_ = checkArr[min];
// for (let i = min; i <= max; i++) {
//   if (checkArr[i] >= max_) max_ = checkArr[i];
// }
// for (let i = min; i <= max; i++) {
//   if (checkArr[i] == max_) finalArr.push(i);
// }
// console.log(finalArr);

// 10. Cho người dùng nhập vào 1 chuỗi bất kỳ
// Kiểm tra xem chuỗi đó có phải dạng palindrome không 
// Ví dụ: "eye" đảo ngược === "eye" => palindrome
// "racecar" đảo ngược === "racecar" => palindrome
// Nếu đúng là dạng đó => In ra correct
// Nếu không => In ra false

// let str = String(prompt(`Nhập vào một chuỗi bất kì:`));
// let arr = str.split("");
// console.log(str);
// console.log(arr);
// if(JSON.stringify(arr)===JSON.stringify(arr.reverse())){
//     console.log(`Correct`);
// } else{
//     console.log(`false`);
// }