const evalInput = document.getElementById("eval-input");
const evalResult = document.getElementById("eval-result");

evalInput.addEventListener("change", (event) => {
  const evaluatedValue = eval(event.target.value);
  evalResult.innerHTML = evaluatedValue;
});