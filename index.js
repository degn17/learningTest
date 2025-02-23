// document.getElementById("count").innerText = 5;

let countEL = document.getElementById("count-el");
// rariable 引用来自html的元
console.log(countEL);
let count = 0;

let saveEl = document.getElementById("save-el");
console.log(saved);

function increment() {
  console.log("The button was clicked");
  count += 1; //简写方法
  countEL.textContent = count;
  // innerText property设置该元素的属性
  console.log(count);
}

function save() {
  let saved = count + " - ";
  saveEl.textContent += saved;
  count = 2;
  countEL.textContent = count;
}

let welcomeEl = document.getElementById("welcome-el");
let name = "Wei";
let greeting = "Welcome back, ";
welcomeEl.innerText = greeting + name;
welcomeEl.innerText = welcomeEl.innerText + " 😊";
