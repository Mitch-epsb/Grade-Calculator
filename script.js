document.getElementById("calc").addEventListener("click", calculate);

function calculate() {
  // Input
  let gr1 = Number(document.getElementById("CScript1-inp").value);
  let gr2 = Number(document.getElementById("SPro1-inp").value);
  let gr3 = Number(document.getElementById("SPro2-inp").value);
  let gr4 = Number(document.getElementById("CScript2-inp").value);
  let gr5 = Number(document.getElementById("projA-inp").value);

  // Processing
  let output = (gr1 + gr2 + gr3 + gr4 + gr5) / 5;

  // output
  console.log(output);
  document.getElementById("grade").innerHTML = Math.round(output);
}
