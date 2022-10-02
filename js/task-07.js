const controlInputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

textRef.setAttribute("style", "font-size: 16px");
// const textValue = textRef.attributes.style.value;
const { style } = textRef.attributes;

controlInputRef.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  style.value = `font-size: ${inputValue}px`;
});
