const evalInput = document.getElementById("eval-input");
const evalResult = document.getElementById("eval-result");

evalInput.addEventListener("change", (event) => {
  const inputValue = event.target.value;
  const evaluatedValue = eval(inputValue);

  evalResult.innerHTML = evaluatedValue;
});