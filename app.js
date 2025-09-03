const inputTemp = document.getElementById("inputTemp");
const outputTemp = document.getElementById("outputTemp");
const swapBtn = document.getElementById("swapBtn");
const modeLabel = document.getElementById("modeLabel");
const result = document.getElementById("result");
const formulaText = document.getElementById("formulaText");

let cToF = true;

function celsiusToFahrenheit(c) {
  return (c * 9/5 + 32).toFixed(2);
}

function fahrenheitToCelsius(f) {
  return ((f - 32) * 5/9).toFixed(2);
}

function convert() {
  const value = parseFloat(inputTemp.value);
  if(isNaN(value)) {
    result.textContent = "Introduceți un număr valid!";
    outputTemp.value = "";
    formulaText.textContent = "";
    return;
  }

  if(cToF) {
    const converted = celsiusToFahrenheit(value);
    outputTemp.value = converted;
    result.textContent = `${value}°C = ${converted}°F`;
    formulaText.textContent = `Formula: (°C × 9/5) + 32 = °F`;
  } else {
    const converted = fahrenheitToCelsius(value);
    outputTemp.value = converted;
    result.textContent = `${value}°F = ${converted}°C`;
    formulaText.textContent = `Formula: (°F − 32) × 5/9 = °C`;
  }
}

inputTemp.addEventListener("input", convert);

swapBtn.addEventListener("click", () => {
  cToF = !cToF;
  modeLabel.textContent = cToF ? "Mod: Celsius → Fahrenheit" : "Mod: Fahrenheit → Celsius";
  inputTemp.value = "";
  outputTemp.value = "";
  result.textContent = "Result";
  formulaText.textContent = "";
});
