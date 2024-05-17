let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");
let text = document.getElementById("writtenText");


// let fontSize = document.getElementsByClassName("fontSizeValue")

// for( let i =0;i<fontSize.length;i++){

//     fontSize[i].addEventListener('click',()=>{
//        var font =   this.value;
//        console.log(font)
//     })
// }

function fontSizeHaiYe(num){
    console.log(num)
    text.style.fontSize = num+"px"
}

function fontss(){
    console.log(fontss)
}



// EvenListners 

bold.addEventListener("click", () => {
operating()

  text.style.fontWeight = "bold";
});
italic.addEventListener("click", () => {

operating()
  text.style.fontStyle = "italic";
});
underline.addEventListener("click", () => {
operating()

  text.style.textDecoration = "underline";
});

function operating(){
    text.style.fontWeight = "400";
    text.style.fontStyle = "normal";
    text.style.textDecoration = "none";
} 