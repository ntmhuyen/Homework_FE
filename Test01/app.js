// 1. Bài 1 : Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả. (2đ)
// Đầu vào: str_input 
// Đầu ra: đảo ngược chuỗi và in ra kết quả
// Ví dụ:
// Cho: str_input = "program"; in ra: "margorp"
// Cho: str_input = "data"; in ra: "atad"
// Lưu ý: không sử dụng hàm reverse()

// let str_input = prompt("Nhập chuỗi:");
// let arr = str_input.split("");
// console.log(arr);
// let arrReverse = [];
// for( let i = arr.length -1 ; i >= 0; i--) {
//     arrReverse.push(arr[i]);
// }
// let result = arrReverse.join("");
// console.log(result);

// Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. (2đ)
// Đầu vào: str
// Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
// Ví dụ
// Cho "this is Test"; In ra "This is Test"
// Cho "hello a"; In ra "Hello A”

// let userInput = prompt("Nhập chuỗi bất kỳ:").toLowerCase();;
// console.log(userInput);
// let words = userInput.split(" ");
// console.log(words);
// let result = "";
// for(let i = 0; i < words.length; i++){
//     let word = words[i];
//     let letters = word.split("");
//     // console.log(letters);
//     letters[0] = letters[0].toUpperCase();
//     let newWord = letters.join("");
//     // console.log(newWord);
//     result = result + newWord + " ";
// }

// console.log(result);

// Bài 3 : Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (2đ)
// Đầu vào: 1 mảng
// Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
// Ví dụ
// Cho Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”five”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
// Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]

// let arr = [];
// let str = prompt("Nhập dãy ký tự bất kỳ:");
// let ar = str.split(","); 
// for( i = 0; i < ar.length ; i++){
//     arr.push(ar[i]);  
// }
// console.log(arr);
// let arr2 = [];
// for ( let j = 0; j < arr.length; j++){
//     if(arr2.indexOf(arr[j]) === -1)
//         arr2.push(arr[j]);
// }
// console.log(`Mảng mới (không lặp) là:`);
// console.log(arr2);

// Bài 4 : Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ). 
// Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete). (2đ)

// const employees = [
//     {
//         name: 'huyen',
//         age: 23,
//         salary: 1000,
//         position: 'tester'
//     },
//     {
//         name: 'ngoc',
//         age: 23,
//         salary: 3000,
//         position: 'ceo'
//     },
//     {
//         name: 'minh',
//         age: 22,
//         salary: 500,
//         position: 'intern_dev'
//     },
// ]
// console.table(employees);
// while (true) {
//     let userInput = prompt("Nhập chức năng muốn thực hiện(C/R/U/D/E):").toUpperCase();
//     if (userInput === "R") {
//         console.log(`Danh sách nhân viên`);
//         console.table(employees);
//     } else if (userInput === "C") {
//         const newName = prompt('Nhập tên:');
//         const newAge = prompt('Nhập tuổi:');
//         const newSalary = prompt('Nhập mức lương:');
//         const newPosition = prompt('Nhập vị trí(chức vụ):');
//         employees.push({
//             name: newName,
//             age: newAge,
//             salary: newSalary,
//             position: newPosition,
//         })
//         console.table(employees);

//     } else if (userInput === "U") {
//         let input = prompt("Nhập index nhân viên muốn sửa");
//         if (input > employees.length || input < 0) {
//             alert("Không tìm thấy nhân viên với index =" + input);
//         } else {
//             employees[input].name = prompt('Nhập tên:');
//             employees[input].age = prompt('Nhập tuổi:');
//             employees[input].salary = prompt('Nhập mức lương:');
//             employees[input].position = prompt('Nhập vị trí(chức vụ):');
//             console.log("Update success");
//             console.table(employees);
//         }
//     } else if (userInput === "D") {
//         let d = prompt("Nhập index của Employee muốn xóa:");
//         if (d > employees.length || d < 0) {
//             alert("Không tìm thấy nhân viên với index =" + d);
//         } else {
//             employees.splice(d, 1);
//             alert("Xóa thành công!");
//             console.table(employees);
//         }
//     } else if (userInput === "E") {
//         break;
//     } else {
//         alert("Nhập sai, vui lòng nhập lại");
//     }
// }


// Bài 5 : Viết chương trình cho phép người dùng nhập vào ngày tháng năm. (2đ)
// A, Kiểm tra xem ngày tháng năm đó có hợp lệ hay không (1đ)
// Ví dụ
// Ngày 30/4/2019 là ngày hợp lệ
// Ngày 29/2/2019 là ngày không hợp lệ
// Gợi ý: hợp lệ nếu ngày ∈ [1,31] và tháng ∈ {1,3,5,7,8,10,12} hoặc ngày ∈ [1,30] và tháng ∈ {4,6,9,11} hoặc tháng 2 năm nhuận thì có ngày 29 ngược lại tháng 2 năm không nhuận thì chỉ có đến ngày 28
// B, Nếu ngày tháng năm đó hợp lệ thì đưa thêm thông tin về ngày tiếp theo (1đ)
// Ví dụ
// Ngày 30/04/2019 là ngày hợp lệ” “Ngày tiếp theo là: 01/5/2019
// Ngày 31/12/2020 là ngày hợp lệ” “Ngày tiếp theo là: 01/01/2021

// let day = Number(prompt("Nhập ngày:"));
// let month = Number(prompt("Nhập tháng:"));
// let year = Number(prompt("Nhập năm:"));

// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         if (day > 0 && day <= 31) {
//             console.log(`Ngày ${day}/${month}/${year} là ngày hợp lệ.`)
//             if (day === 31 && month === 12) {
//                 console.log(`Ngày tiếp theo là: ${day - 30}/01/${year + 1}`);
//             } else if (day === 31 && month < 12 ) {
//                 console.log(`Ngày tiếp theo là: ${day - 30}/${month + 1}/${year}`);
//             } else {
//                 console.log(`Ngày tiếp theo là: ${day + 1}/${month}/${year}`);
//             }
//         } else {
//             console.log(`Ngày ${day}/${month}/${year} là ngày không hợp lệ.`)
//         }
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         if (day > 0 && day <= 30) {
//             console.log(`Ngày ${day}/${month}/${year} là ngày hợp lệ.`)
//             if (day === 30) {
//                 console.log(`Ngày tiếp theo là: ${day - 29}/${month + 1}/${year}`);
//             } else {
//                 console.log(`Ngày tiếp theo là: ${day + 1}/${month}/${year}`);
//             }
//         } else {
//             console.log(`Ngày ${day}/${month}/${year} là ngày không hợp lệ.`)
//         }
//         break;
//     case 2:
//         if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
//             console.log(`${year} là năm nhuận`);
//             if (day > 0 && day <= 29) {
//                 console.log(`Ngày ${day}/${month}/${year} là ngày hợp lệ.`)
//                 if (day === 29) {
//                     console.log(`Ngày tiếp theo là: ${day - 28}/${month + 1}/${year}`);
//                 } else {
//                     console.log(`Ngày tiếp theo là: ${day + 1}/${month}/${year}`);
//                 }
//             } else {
//                 console.log(`Ngày ${day}/${month}/${year} là ngày không hợp lệ.`)
//             }
//         } else {
//             console.log(`${year} không là năm nhuận`);
//             if (day > 0 && day <= 28) {
//                 console.log(`Ngày ${day}/${month}/${year} là ngày hợp lệ.`)
//                 if (day === 28) {
//                     console.log(`Ngày tiếp theo là: ${day - 27}/${month + 1}/${year}`);
//                 } else {
//                     console.log(`Ngày tiếp theo là: ${day + 1}/${month}/${year}`);
//                 }
//             } else {
//                 console.log(`Ngày ${day}/${month}/${year} là ngày không hợp lệ.`)
//             }
//         }
//         break;
//         default:
//             break;
// }

// // Cách 2
// let userInput = prompt("Please input your date");
// // a/b/c
// let day = Number(userInput.split("/")[0]);
// let month = Number(userInput.split("/")[1]);
// let year = Number(userInput.split("/")[2]);
// let nextDay;
// let nextMonth;
// let nextYear;

// let isNumber = !isNaN(day) && !isNaN(month) && !isNaN(year);
// function isLeapYear(year) {
//     if (year % 4 === 0 && year !== 100) {
//         return true;
//     }
//     if (year % 400 === 0) {
//         return true
//     }
//     return false;
// }
// if (isNumber) {
//     if (year >= 0) {
//         if (month >= 1 && month <= 12) {
//             switch (month) {
//                 case 1:
//                 case 3:
//                 case 5:
//                 case 7:
//                 case 8:
//                 case 10:
//                 case 12:
//                     if (day >= 1 && day <= 31) {
//                         console.log(`Ngày ${userInput} hợp lệ`);
//                         if (day === 31 && month === 12) {
//                             nextDay = 1;
//                             nextMonth = 1;
//                             nextYear = year + 1;
//                         } else if (day === 31) {
//                             nextDay = 1;
//                             nextMonth = month + 1;
//                             nextYear = year;
//                         } else {
//                             nextDay = day + 1;
//                             nextMonth = month;
//                             nextYear = year;
//                         }
//                     } else {
//                         console.log("Ngày không hợp lệ");
//                     }
//                     break;
//                 case 4:
//                 case 6:
//                 case 9:
//                 case 11:
//                     if (day >= 1 && day <= 30) {
//                         console.log(`Ngày ${userInput} hợp lệ`);
//                         if (day === 31) {
//                             nextDay = 1;
//                             nextMonth = month + 1;
//                             nextYear = year;
//                         } else {
//                             nextDay = day + 1;
//                             nextMonth = month;
//                             nextYear = year;
//                         }
//                     } else {
//                         console.log("Ngày không hợp lệ");
//                     }
//                     break;
//                     break;
//                 case 2:
//                     if (isLeapYear(year)) {
//                         if (day >= 1 && day <= 29) {
//                             console.log(`Ngày ${userInput} hợp lệ`);
//                             if (day === 31) {
//                                 nextDay = 1;
//                                 nextMonth = month + 1;
//                                 nextYear = year;
//                             } else {
//                                 nextDay = day + 1;
//                                 nextMonth = month;
//                                 nextYear = year;
//                             }
//                         } else {
//                             console.log("Ngày không hợp lệ");
//                         }


//                     } else if {
//                         console.log("Ngày không hợp lệ");
//                     }
//                     break;
//                 default:
//                     break;
//             }
//         }

//     } else {
//         console.log("Ngày không hợp lệ");
//     }
// } else {
//     console.log("Ngày không hợp lệ");
// }

// Cách 2:...
let userInput = prompt("Please input your date");
// a/b/c
let day = Number(userInput.split("/")[0]);
let month = Number(userInput.split("/")[1]);
let year = Number(userInput.split("/")[2]);
let nextDay;
let nextMonth;
let nextYear;

let isNumber = !isNaN(day) && !isNaN(month) && !isNaN(year);

function isLeapYear(year) {
    if(year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    if(year % 400 === 0) {
        return true;
    }
    return false;
}

if(isNumber) {
    if(year >= 0) {
        if(month >= 1 && month <= 12){
            switch (month) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    if(day >= 1 && day <= 31){
                        console.log(`Ngày ${userInput} hợp lệ`)
                        if(day === 31 && month === 12){
                            nextDay = 1;
                            nextMonth = 1;
                            nextYear = year + 1;
                        } else if (day === 31) {
                            nextDay = 1;
                            nextMonth = month + 1;
                            nextYear = year;
                        } else {
                            nextDay = day + 1;
                            nextMonth = month;
                            nextYear  = year;
                        }
                    } else {
                        console.log("Ngày không hợp lệ")
                    }
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    if(day >= 1 && day <= 30){
                        console.log(`Ngày ${userInput} hợp lệ`);
                        if (day === 30) {
                            nextDay = 1;
                            nextMonth = month + 1;
                            nextYear = year;
                        } else {
                            nextDay = day + 1;
                            nextMonth = month;
                            nextYear  = year;
                        }
                    } else {
                        console.log("Ngày không hợp lệ")
                    }
                    break;
                case 2:
                    if(isLeapYear(year)){
                        if(day >= 1 && day <= 29){
                            console.log(`Ngày ${userInput} hợp lệ`);
                            if (day === 29) {
                                nextDay = 1;
                                nextMonth = 3;
                                nextYear = year;
                            } else {
                                nextDay = day + 1;
                                nextMonth = month;
                                nextYear  = year;
                            }
                        } else {
                            console.log("Ngày không hợp lệ")
                        }
                    } else {
                        if(day >= 1 && day <= 28){
                            console.log(`Ngày ${userInput} hợp lệ`);
                            if (day === 28) {
                                nextDay = 1;
                                nextMonth = 3;
                                nextYear = year;
                            } else {
                                nextDay = day + 1;
                                nextMonth = month;
                                nextYear  = year;
                            }
                        } else {
                            console.log("Ngày không hợp lệ")
                        }
                    }
                    break;
                default:
                    break;
            }
            console.log(`Ngày tiếp theo là ${nextDay}/${nextMonth}/${nextYear}`)
        } else {
            console.log("Ngày không hợp lệ");
        }
    } else {
        console.log("Ngày không hợp lệ");
    }
} else {
    console.log("Ngày không hợp lệ");
}