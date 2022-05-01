// How to implement setInterval of your own using setTimeout

let count = 0;
let interval = setInterval(function () {
  console.log(count);
  count++;
}, 100);

setTimeout(function () {
  clearInterval(interval);
  interval = setInterval(function () {
    console.log(count);
    count--;
    if (count < 0) clearInterval(interval);
  });
}, 500);
// Solution: