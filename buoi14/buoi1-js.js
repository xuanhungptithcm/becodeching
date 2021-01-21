// 1. Tim hieu kieu du lieu
// 2. if else (switch case)
// 3. Function(hàm).
// 4. Cách khai báo biến.
// 5.

// 1.const, let, var(không nên dùng).
// có 7 kiểu dữ liệu nguyên thuỷ (gốc)
// string
// number
// boolean
// undefined
// null
// BigInt
// Symbol
//==============

// Object
// Array
// Function

function hienTen(name) {
  console.log(name);
}
function hienTuoi(age) {
  console.log(age);
}
function hienGioiTinh(sex) {
  if (sex == true) {
    console.log("Gioi tinh nam");
  } else {
    console.log("Gioi tinh nua");
  }
}

let undef = undefined;
let demoNull = null;
let abc;

console.log(typeof undef);
console.log(typeof demoNull);
console.log(typeof abc);

const object = {};
const array = [];

// hienTen(object.name);
// hienTuoi(object.age);
// hienGioiTinh(object.sex);
