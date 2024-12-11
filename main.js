const form = document.getElementById("form-activity");
const imgApproved = `<img src="./images/aprovado.png" alt="Emoji Celebrando"`;
const imgReproved = `<img src="./images/reprovado.png" alt="Emoji Decepcionado"`;
const spanApproved = `<span class="result approved">Aprovado</span>`;
const spanReproved = `<span class="result reproved">Reprovado</span>`;

const activitiesNames = [];
const activitiesGrades = [];
const minGrade = parseFloat(prompt("Digite a nota mínima:"));
let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  addRow();
  updateTable();
  updateFinalAvarage();
});

function addRow() {
  const inputActivityName = document.getElementById("activity-name");
  const inputActivityGrade = document.getElementById("activity-grade");

  if (activitiesNames.includes(inputActivityName.value)) {
    alert(`A atividade: ${inputActivityName.value} já foi inserida!`);
  } else {
    activitiesNames.push(inputActivityName.value);
    activitiesGrades.push(parseFloat(inputActivityGrade.value));

    let linha = "<tr>";
    linha += `<td>${inputActivityName.value}</td>`;
    linha += `<td>${inputActivityGrade.value}</td>`;
    linha += `<td>${
      inputActivityGrade.value >= minGrade ? imgApproved : imgReproved
    }</td>`;
    linha += "</tr>";

    linhas += linha;
  }

  inputActivityName.value = "";
  inputActivityGrade.value = "";
}

function updateTable() {
  const bodyTable = document.querySelector("tbody");
  bodyTable.innerHTML = linhas;
}

function calculateFinalAverage() {
  let sumGrades = 0;
  for (let i = 0; i < activitiesGrades.length; i++) {
    sumGrades += activitiesGrades[i];
  }

  return (sumGrades / activitiesGrades.length).toFixed(1);
}

function updateFinalAvarage() {
  const average = calculateFinalAverage();

  document.getElementById("final-average-value").innerHTML = average;
  document.getElementById("final-average-result").innerHTML =
    average >= minGrade ? spanApproved : spanReproved;
}
