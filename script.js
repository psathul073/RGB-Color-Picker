//By ATHUL P.S
//R G B Color generator Tool
//Variable declaration
var Color = document.getElementById("color");
var RGB = document.getElementById("RGB");
var HEX = document.getElementById("HEX");
var Rslider = document.getElementById("Red");
var Gslider = document.getElementById("Green");
var Bslider = document.getElementById("Blue");
var colorR = Rslider.value;
var colorG = Gslider.value;
var colorB = Bslider.value;
//slider selectors
const sliderR = document.querySelector(".sliderR");
const sliderValueR = document.querySelector(".pct__textR");
const sliderG = document.querySelector(".sliderG");
const sliderValueG = document.querySelector(".pct__textG");
const sliderB = document.querySelector(".sliderB");
const sliderValueB = document.querySelector(".pct__textB");
//slider properties
const sRprops = { bg: "#e89090", fill: "red" };
const sGprops = { bg: "#62b362", fill: "green" };
const sBprops = { bg: "#7a7aff", fill: "blue" };

//Slider 1
//Using Event Listener to apply, the fill and also change the value of the text
sliderR.querySelector("#Red").addEventListener("input", (event) => {
  sliderValueR.setAttribute("R-pct", event.target.value);
  sRfill(event.target);
});
//Selecting the range input and passing it in the Fill function.
sRfill(sliderR.querySelector("#Red"));

//This function is responsible to create the trailing color and setting the fill.
function sRfill(sliderR) {
  const PCT =
    (100 * (sliderR.value - sliderR.min)) / (sliderR.max - sliderR.min);
  const BG = `linear-gradient(90deg, ${sRprops.fill} ${PCT}%, ${sRprops.bg} ${
    PCT + 0.1
  }%)`;
  sliderR.style.background = BG;
  sliderValueR.setAttribute("R-pct", sliderR.value);
}
//Slider 2
//Using Event Listener to apply, the fill and also change the value of the text.
sliderG.querySelector("#Green").addEventListener("input", (event) => {
  sliderValueG.setAttribute("G-pct", event.target.value);
  sGfill(event.target);
});
//Selecting the range input and passing it in the Fill function.
sGfill(sliderG.querySelector("#Green"));

//This function is responsible to create the trailing color and setting the fill.
function sGfill(sliderG) {
  const PCT =
    (100 * (sliderG.value - sliderG.min)) / (sliderG.max - sliderG.min);
  const BG = `linear-gradient(90deg, ${sGprops.fill} ${PCT}%, ${sGprops.bg} ${
    PCT + 0.1
  }%)`;
  sliderG.style.background = BG;
  sliderValueG.setAttribute("G-pct", sliderG.value);
}

//Slider 3
//Using Event Listener to apply, the fill and also change the value of the text.
sliderB.querySelector("#Blue").addEventListener("input", (event) => {
  sliderValueB.setAttribute("B-pct", event.target.value);
  sBfill(event.target);
});
//Selecting the range input and passing it in the Fill function.
sBfill(sliderB.querySelector("#Blue"));

//This function is responsible to create the trailing color and setting the fill.
function sBfill(sliderB) {
  const PCT =
    (100 * (sliderB.value - sliderB.min)) / (sliderB.max - sliderB.min);
  const BG = `linear-gradient(90deg, ${sBprops.fill} ${PCT}%, ${sBprops.bg} ${
    PCT + 0.1
  }%)`;
  sliderB.style.background = BG;
  sliderValueB.setAttribute("B-pct", sliderB.value);
}
//Slide to change color
var Sliders = document.getElementsByClassName("slider");
for (let i = 0; i < Sliders.length; i++) {
  Sliders[i].addEventListener("input", () => {
    changeColor(Sliders[i].id);
  });
}
//Initial rendering for the Color Box and  Slider Switching
Color.style.background = `rgb(${colorR}, ${colorG}, ${colorB})`;
RGB.innerHTML = `rgb(${colorR}, ${colorG}, ${colorB})`;
HEX.innerHTML = rgbToHex(colorR, colorG, colorB);
document.addEventListener("click", function () {});

function changeColor(SlidersId) {
  switch (SlidersId) {
    case "Red":
      colorR = Rslider.value;
      //Copied info Hide function
      copiedInfo1.style.transform = "translateY(200%)";
      copiedInfo1.style.opacity = "0";
      copiedInfo2.style.transform = "translateY(200%)";
      copiedInfo2.style.opacity = "0";
      bR1.style.borderColor = "#6200ff";
      bR2.style.borderColor = "#6200ff";
      bR1.style.boxShadow = "0 0 3px #6200ff";
      bR2.style.boxShadow = "0 0 3px #6200ff";
      //Click to Change Copy button Text
      $("#copy-btn0").text("Copy HEX");
      $("#copy-btn1").text("Copy RGB");
      break;
    case "Green":
      colorG = Gslider.value;
      //Copied info Hide function
      copiedInfo1.style.transform = "translateY(200%)";
      copiedInfo1.style.opacity = "0";
      copiedInfo2.style.transform = "translateY(200%)";
      copiedInfo2.style.opacity = "0";
      bR1.style.borderColor = "#6200ff";
      bR2.style.borderColor = "#6200ff";
      bR1.style.boxShadow = "0 0 3px #6200ff";
      bR2.style.boxShadow = "0 0 3px #6200ff";
      //Click to Change Copy button Text
      $("#copy-btn0").text("Copy HEX");
      $("#copy-btn1").text("Copy RGB");
      break;
    default:
      colorB = Bslider.value;
      //Copied info Hide function
      copiedInfo1.style.transform = "translateY(200%)";
      copiedInfo1.style.opacity = "0";
      copiedInfo2.style.transform = "translateY(200%)";
      copiedInfo2.style.opacity = "0";
      bR1.style.borderColor = "#6200ff";
      bR2.style.borderColor = "#6200ff";
      bR1.style.boxShadow = "0 0 3px #6200ff";
      bR2.style.boxShadow = "0 0 3px #6200ff";
      //Click to Change Copy button Text
      $("#copy-btn0").text("Copy HEX");
      $("#copy-btn1").text("Copy RGB");
  }
  Color.style.background = `rgb(${colorR}, ${colorG}, ${colorB})`;
  RGB.innerHTML = `rgb(${colorR}, ${colorG}, ${colorB})`;
  HEX.innerHTML = rgbToHex(colorR, colorG, colorB);
}
//Color to Hex Convert
function colorToHex(rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
}
//RGB to HEX Convert
function rgbToHex(r, g, b) {
  var R = colorToHex(r);
  var G = colorToHex(g);
  var B = colorToHex(b);
  return `#${R}${G}${B}`;
}
//border Colours initialisation
const bR1 = document.getElementById("HEX");
const bR2 = document.getElementById("RGB");
//Text1 appear after copy button is clicked
const copiedInfo1 = document.querySelector(".Copy__info1.left1");
//Text2 appear after copy button is clicked
const copiedInfo2 = document.querySelector(".Copy__info2.left2");

//Copy button 1
function copyEvent0() {
  let HEX = document.getElementById("HEX");
  HEX.select();
  document.execCommand("copy");
  copiedInfo1.style.transform = "translateY(0%)";
  copiedInfo1.style.opacity = "0.75";
  copiedInfo2.style.transform = "translateY(200%)";
  copiedInfo2.style.opacity = "0";
  bR1.style.color = "#004500";
  bR1.style.borderColor = "green";
  bR1.style.boxShadow = "0 0 2px green";
  bR2.style.color = "#000000";
  bR2.style.borderColor = "#6200ff";
  bR2.style.boxShadow = "0 0 3px #6200ff";
}

//Copy button 2
function copyEvent1() {
  let RGB = document.getElementById("RGB");
  RGB.select();
  document.execCommand("copy");
  copiedInfo2.style.transform = "translateY(0%)";
  copiedInfo2.style.opacity = "0.75";
  copiedInfo1.style.transform = "translateY(200%)";
  copiedInfo1.style.opacity = "0";
  bR2.style.color = "#004500";
  bR2.style.borderColor = "green";
  bR2.style.boxShadow = "0 0 2px green";
  bR1.style.color = "#000000";
  bR1.style.borderColor = "#6200ff";
  bR1.style.boxShadow = "0 0 3px #6200ff";
}
//Copy Button Click to Change Text Function
$("#copy-btn0").on("click", () => {
  $("#copy-btn0").text("Value Copied!");
});
$("#copy-btn1").on("click", () => {
  $("#copy-btn1").text("Value Copied!");
});
