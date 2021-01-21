//

// const tet = new Date(2021, 01, 11).getTime();
// const now = Date.now(); // TODO: return thoi gian hien tại (ms)

// console.log(`Tet: ${tet}, bây giờ: ${now}`);
// const time = tet - now;
// console.log(
//   `Thoi gian con lai để lau nhà:
//    ms:${time}ms
//    second: ${Math.floor(time / 1000)}s
//    minute: ${Math.floor(time / 1000 / 60)}'
//    hour: ${Math.floor(time / 1000 / 60 / 60)}
//    day: ${Math.floor(time / 1000 / 60 / 60 / 24)}
//   `
// );

// console.log(`Cộng: ${a + b}`);
// console.log(`Trừ: ${a - b}`);
// console.log(`Nhân: ${a * b}`);
// console.log(`Chia: ${a / b}`);
// console.log(`Luỹ Thừa: ${a ** b}`);
// console.log(`Chia dư: ${a % b}`);

// let list = [1, 2, 3, 4, 5];
// TODO: let, const
// var
// let i = 0;
// for (let i = 0; i < list.length; i++) {
//   console.log(`Vi tri ${i}: value=${list[i]}`);
// }
// console.log("var", i);
// console.log(age);
// age = 23;
// console.log(age);

// btn.style.backgroundColor = "#39a0ed";

// btn.addEventListener("click", function (element) {

// });
function handleClick() {
  const dayEl = document.getElementById("days");
  dayEl.innerHTML = `Day: ${day} month: ${
    month + 1 < 10 ? "0" + (month + 1) : month + 1
  }`;
}
setInterval(() => {
  console.log(Date.now());
}, 1000);
