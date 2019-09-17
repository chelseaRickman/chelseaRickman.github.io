var choices = document.getElementById('choices');
var question = document.getElementById('question');
var errorMessage = document.getElementById('errorMessage');
var questionNumber = 0;

choices.addEventListener('click', onChoiceClick);

function onChoiceClick(event) {
    var choiceData = JSON.parse(event.target.getAttribute('data-choice'));
    var isCorrect = choiceData.isCorrect;

    if (isCorrect) {
        updateQuestion(++questionNumber);
    } else {
        //display error
        updateErrorMessage(choiceData.incorrectMessage);
    }

}

function updateQuestion(questionNumber)
{
    var question = window.quizContent[questionNumber];

    updateErrorMessage("");
    updateQuestionText(question.question);
    updateChoices(question.choices);
}

function updateErrorMessage(message) {
    errorMessage.style.display = 'none';
    errorMessage.innerHTML = message;

    setTimeout(() => {
        errorMessage.style.display = 'block';

    }, 0);


}

function updateQuestionText(questionText) {

    question.innerHTML = questionText;
}

function updateChoices(choiceArray)
{
    // remove existing buttons
    choices.innerHTML = "";

    for (var i = 0, n = choiceArray.length; i < n; i++) {
        // create new buttons
        var button = document.createElement('button');
        button.setAttribute('data-choice', JSON.stringify(choiceArray[i]));
        button.innerHTML = choiceArray[i].choice;

        // append the buttons
        choices.appendChild(button);
    }

}

updateQuestion(questionNumber);