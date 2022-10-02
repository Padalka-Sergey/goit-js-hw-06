const textInputRef = document.querySelector("#validation-input");
const dataLengthRef = document.querySelector('input[data-length="6"]');

textInputRef.addEventListener("blur", (event) => {
  const dataLength = Number(dataLengthRef.dataset.length);
  const symbolsLength = event.target.value.length;
  textInputRef.classList.add("invalid");
  if (symbolsLength === dataLength) {
    textInputRef.classList.remove("invalid");
    textInputRef.classList.add("valid");
  }
});
