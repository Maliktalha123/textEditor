let heading = document.getElementById("heading");
let lowerCase = document.getElementById("smallAlphabets");
let capitialize = document.getElementById("capitalAlphabets");
let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");
let text = document.getElementById("writtenText");

// EvenListners

heading.addEventListener("click",()=>{
  operating();
  text.style.fontSize = "36px"
})

lowerCase.addEventListener("click",()=>{
  operating()
 text = text.toLowerCase()
})








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
