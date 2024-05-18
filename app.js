let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");
let text = document.getElementById("writtenText");





function fontss() {
  console.log(fontss.value);
}

// EvenListners

bold.addEventListener("click", () => {
  operating();

  text.style.fontWeight = "bold";
});
italic.addEventListener("click", () => {
  operating();
  text.style.fontStyle = "italic";
});
underline.addEventListener("click", () => {
  operating();

  text.style.textDecoration = "underline";
});

function operating() {
  text.style.fontWeight = "400";
  text.style.fontStyle = "normal";
  text.style.textDecoration = "none";
}
