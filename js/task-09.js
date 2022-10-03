function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector(".change-color");
const bcgColorRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

const handleClick = () => {
  bcgColorRef.textContent = getRandomHexColor();
  // bodyRef.setAttribute("style", `background-color:${getRandomHexColor()}`);

  bodyRef.setAttribute("style", `background-color:${bcgColorRef.textContent}`);
  // console.log(bcgColorRef.textContent);
};

btnRef.addEventListener("click", handleClick);
