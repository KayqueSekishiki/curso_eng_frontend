const form = document.getElementById("form");
const numberOne = document.getElementById("number-one");
const numberTwo = document.getElementById("number-two");
const messageText = document.querySelector(".message-text");

let message = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  isGreat();
  updateMessage();
  showMessage();
  clearInputs();
});

function isGreat() {
  if (numberTwo.value > numberOne.value) {
    message = `O número digitado na opção B (${numberTwo.value}) é válido, pois é maior que o número digitado na opção A (${numberOne.value})`;
  } else {
    message = `O número digitado na opção B (${numberTwo.value}) é invalido, pois é menor que o número digitado na opção A (${numberOne.value})`;
  }
}

function updateMessage() {
  messageText.innerHTML = message;
  if (numberTwo.value > numberOne.value) {
    messageText.classList.add("positive");
    messageText.classList.remove("negative");
  } else {
    messageText.classList.add("negative");
    messageText.classList.remove("positive");
  }
}

function showMessage() {
  const messageContainer = document.querySelector(".message-container");
  const messageContainerChildren = messageContainer.children;
  for (let i = 0; i < messageContainerChildren.length; i++) {
    const child = messageContainerChildren[i];
    child.hidden = false;
  }
}

function vanishMessage() {
  const messageContainer = document.querySelector(".message-container");
  const messageContainerChildren = messageContainer.children;
  for (let i = 0; i < messageContainerChildren.length; i++) {
    const child = messageContainerChildren[i];
    child.hidden = true;
  }
}

function clearInputs() {
  numberOne.value = "";
  numberTwo.value = "";

  setTimeout(() => {
    vanishMessage();
  }, 2000);
}
