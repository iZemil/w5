const list = ['☕', '☃', '☺', '☻', '✌', '❤', '⚘', '❁', '❀', '☀', '♫', '♪', '❆', '❄', '☂', '★', '⊙'];
const len = list.length;

function w5() {
  const randomIndex = Math.floor(Math.random() * len);
  console.warn('\x1b[36m%s\x1b[0m', list[randomIndex]);
}

setInterval(w5, 1500);
module.exports = w5;