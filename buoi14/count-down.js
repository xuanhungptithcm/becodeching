const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const timeUtil = new Date(2021, 1, 12);

const DATE_TIME = 24 * 60 * 60 * 1000;
const HOUR = 60 * 60 * 1000;
const MINUTE = 60 * 1000;
setInterval(() => {
  countDown();
}, 1000);

function countDown() {
  // TODO: ms; 1000ms = 1s
  const time = timeUtil.getTime() - Date.now();

  const d = Math.floor(time / DATE_TIME);

  const h = Math.floor((time % DATE_TIME) / HOUR);

  const m = Math.floor(((time % DATE_TIME) % HOUR) / MINUTE);

  const s = Math.floor((((time % DATE_TIME) % HOUR) % MINUTE) / 1000);

  day.innerHTML = d;
  hour.innerHTML = h;
  minute.innerHTML = m;
  second.innerHTML = s;
}
