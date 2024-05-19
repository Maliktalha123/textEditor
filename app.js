let heading = document.getElementById("heading");
let lowerCase = document.getElementById("smallAlphabets");
let capitialize = document.getElementById("capitalAlphabets");
let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");
let text = document.getElementById("writtenText");
let input = document.getElementById("input");
// EvenListners
function eee() {
  text.innerHTML = input.value;
}

heading.addEventListener("click", () => {
  operating();
  deactiveFunction();
  heading.style.color = "blue";
  heading.style.textDecoration = "underline";

  text.style.fontSize = "36px";
});

capitialize.addEventListener("click", () => {
  operating();
  deactiveFunction();
  capitialize.style.color = "blue";
  capitialize.style.textDecoration = "underline";
  text.style.textTransform = "uppercase";
});

lowerCase.addEventListener("click", () => {
  operating();
  deactiveFunction();
  lowerCase.style.color = "blue";
  lowerCase.style.textDecoration = "underline";

  text.style.textTransform = "lowercase ";
});

bold.addEventListener("click", () => {
  operating();
  deactiveFunction();
  bold.style.color = "blue";
  bold.style.textDecoration = "underline";

  text.style.fontWeight = "bold";
});
italic.addEventListener("click", () => {
  operating();
  deactiveFunction();
  italic.style.color = "blue";
  italic.style.textDecoration = "underline";

  text.style.fontStyle = "italic";
});
underline.addEventListener("click", () => {
  operating();
  deactiveFunction();

  underline.style.color = "blue";
  underline.style.textDecoration = "underline";
  text.style.textDecoration = "underline";
});

function operating() {
  // .style.color = "black";
  text.style.textDecoration = "none";
  text.style.fontSize = "22px";
  text.style.fontWeight = "400";
  text.style.fontStyle = "normal";
  text.style.textDecoration = "none";
}
function deactiveFunction() {
  heading.style.color = "black";
  heading.style.textDecoration = "none";
  lowerCase.style.color = "black";
  lowerCase.style.textDecoration = "none";
  capitialize.style.color = "black";
  capitialize.style.textDecoration = "none";
  bold.style.color = "black";
  bold.style.textDecoration = "none";
  italic.style.color = "black";
  italic.style.textDecoration = "none";
  underline.style.color = "black";
  underline.style.textDecoration = "none";
}
