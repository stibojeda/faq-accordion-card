const arrowButton1 = document.getElementById("faqcard_arrow_button1");
const arrowButton2 = document.getElementById("faqcard_arrow_button2");

let buttonState = false;

function changeState(paragraph) {
  if (buttonState == false) {
    document.querySelector(paragraph).style.display = "block";
    buttonState = true;
  }
  else {
    document.querySelector(paragraph).style.display = "none";
    buttonState = false;
  }
}

arrowButton1.addEventListener("click", () => {changeState("#paragraph_1")});
arrowButton2.addEventListener("click", () => {changeState("#paragraph_2")});

