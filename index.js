function generateColor (){
  const randomNumber = Math.floor(Math.random() * 16777215) ;
  const HexNumber = `#${randomNumber.toString(16)}`
  document.querySelector("body").style.backgroundColor = HexNumber;
  document.querySelector(".hexCode").innerHTML = HexNumber;
}
document.querySelector(".generator").addEventListener("click",generateColor);

generateColor();