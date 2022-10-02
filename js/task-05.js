const nameInputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

document.addEventListener("input", (event) => {
  spanRef.textContent = event.target.value;

  if (event.target.value === "") {
    spanRef.textContent = "Anonymous";
  }
});
