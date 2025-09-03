function calculeazaFormula() {
    var celsius = Number(document.getElementById("degree-celsius-number").value)

    var formula = celsius * 9/5 + 32;

    document.getElementById("output").textContent = formula + " °F";
}