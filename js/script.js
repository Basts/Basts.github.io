let answers = [];

function showAndHideElements (currentElement, nextElement) {
  document.getElementById(currentElement).classList.remove('active');
  document.getElementById(nextElement).classList.add('active');
}

function answerQuestion (currentElement, nextElement, answer) {
  showAndHideElements(currentElement, nextElement);
  answers.push(answer);
}

function answerLastQuestion (currentElement, answer) {
  answers.push(answer);

  const isValid = answers.filter(value => value === false).length === 0;

  if (isValid) {
    showAndHideElements(currentElement, 'cv');
  } else {
    showAndHideElements(currentElement, 'warning');
  }
}

function showAndHideElementsReset (currentElement, nextElement) {
  showAndHideElements(currentElement, nextElement);
  answers = [];
}
