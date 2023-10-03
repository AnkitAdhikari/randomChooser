let options = document.getElementById("options");
let seperator = document.getElementById("seperator");
const answer = document.querySelector(".answer");
const rand = function (len) {
  return Math.trunc(Math.random() * len);
};
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  seperator = seperator.value;
  answer.textContent = options.value
    .split(seperator)
    .at([rand(options.length)]);
});
