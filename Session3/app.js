//Cho người dùng nhập vào số n
//Vẽ tam giác trên ra màn hình console

// let n = Number(prompt("Nhập n = "));
// console.log(`Tam giác cần vẽ là: `);
// let s = " ";
// for(let i = 1; i <= n; i++){
//     s = s + "*";
//     console.log(s);
// }

// cách 2: Sử dụng `repeat` dành cho kiểu dữ liệu string
// let n = Number(prompt("Nhập n = "));
// console.log(`Tam giác cần vẽ là: `);
// for(let i = 1; i <= n; i++){
//     console.log("* ".repeat(i));
// }


// 2. Cho người dùng nhập vào n
// in ra bảng cửu chương từ 1 đến 10 của số đó

// let n = Number(prompt("Nhập n (1-10)"));
// console.log(`Bảng cửu chương ${n} là:`)
// for(let i = 1; i<=10; i++){
//     console.log(`${n} x ${i} = ${n*i}`);
// }

//3. Cho người dùng nhập vào n
// In ra các số từ 1-n kèm theo
//VD: 1 là số lẻ
//      2 là số chắn
//...

// let n = Number(prompt("Nhập n"));
// for( let i=1; i<=n; i++){
//     if(i%2 !== 0){
//         console.log(`${i} là số lẻ`);
//     } else{
//         console.log(`${i} là số chẵn`);
//     }
// }

// Array/List - Mảng/dánh sách

// let name = ["Huyen", "Minh"];
// let otherName = name;


//Khai báo> 
// let name = ["hoa giay", "hoa hong", "hoa hue"];
// add element in the end : push(" ")
// name.push("hoa phuong", "hoa lan", "hoa cuc");
// console.log(name);
// // length = Lấy dộ dài của mảng
// console.log(name.length); //3
// //index => 0 = length - 1
// //read element: ten mảng + [index]
// console.log(name[1]); //"hoa lan"
// //update element: ten mảng + [index] = "other value"
// // Gán giá trị mới => log ra màn hình console
// console.log(name[1] = "Hoa ho diep");
// console.log(name[1]); //"Hoa ho diep"

// // delete element in the end: tên mảng . pop()
// name.pop();
// console.log(name);

// //add element in the start arr: .unshift("other value")
// name.unshift("hoa hoa");
// console.log(name);

// //delete element inthe start arr: .shift()

// // delete element by index: .splice(<index>, <số phần tử cần xóa>)

// name.splice(0,1);
// console.log(name);
// console.log("Danh sách tên hoa là: ");
// for( let i = 0; i < name.length; i++){
//     console.log(name[i]);
// }

//
// console.table(name);
// confirm("Bạn có muốn xóa?");

//Bài tập
//Cho 1 mảng
//let arr = ['Apple', 'Banana', "Orange", "Strawberry", "Mango"];
//Sử dụng vòng lặp viết chương trình CRUD cho hoa quả
//Nếu người dùng:
// Nhập C => hiển thị inputBox cho người dùng thêm sản phẩm
// Nhập R => Hiển thị danh sách sản phẩm console.table(arr);
// Nhập U => Cho người dùng nhập số Index tên muốn update
// Nhập D => Cho người dùng nhập số Index cần xóa => Hiển thị box confirm 
// nếu => Ok => xóa
// nếu => cancel = > không xóa

//Nhập S => Cho người dùng nhập chuỗi cần search => trả về table những element có chuỗi search đó
//vd: search = "ng" => ["Orange", "Mango"]
//Nhập 0 => out system
//Nhập ký tự khác => báo lỗi => cho nhập lại
//  note : hiển thị = console.able(arr);

//Bài làm
let arr = ['Apple', 'Banana', "Orange", "Strawberry", "Mango"];
let loop = true;
while (loop) {
    let key = prompt("Nhập thao tác bạn muốn thực hiện: ");
    switch (key) {
        case "C":
            let n = prompt("Nhập loại mới:");
            arr.push(n);
            alert("Thêm thành công!");
            console.table(arr);
            break;
        case "R":
            console.table(arr);
            break;
        case "U":
            let u = Number(prompt("Nhập index phần tử muốn sửa:"));
            let ud = prompt("Nhập thông tin sửa:");
            arr[u] = ud;
            alert("Update thành công!");
            console.table(arr);
            break;
        case "D":
            let d = Number(prompt("Nhập index phần tử muốn xóa"));
            let result = confirm("Bạn có chắc muốn xóa không?")
            if (result) {
                arr.splice(d, 1);
                alert("Xóa thành công!");
                console.table(arr);
            } else {
                console.log("Cancel!")
                console.table(arr);
            }
            break;
        case "S":
            let str = prompt("Nhập chuỗi muốn tìm:");
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].indexOf(str) != -1) {
                    console.log(arr[i]);
                } 
            }
            break;
        case "0":
            let cf = confirm("Bạn có chắc muốn thoát không?")
            if (cf)
                loop = false;
            break;
        default:
            alert("Nhập sai, mời nhập lại!");
            // break;
    }
}

// .indexOf(input)
