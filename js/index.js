
//quiz data
let yourAnalysis = yourQuiz[1];
let yourQuestions = yourQuiz.slice(2);

//quiz setup
let selectedQuizLength = 5;
let yourAnswers = Array(yourQuestions.length).fill('-1');
let currentQuestion = -1;

//analysis
let quizResults = [0, 0, 0];
let quizResultsPercentages = [0, 0, 0];
let skippedQuestionsCount = 0;
let skippedQuestionsPercentage = 0;

function presentQuiz(quizTitle, quizInstructions, quizLengthSelector) {
    document.getElementById(quizTitle).innerText = yourQuiz[0][0];
    document.getElementById(quizInstructions).innerText = yourQuiz[0][1].instructions;
    document.getElementById(quizLengthSelector).max = yourQuestions.length;

    document.getElementById('previous-button').disabled = true;
    document.getElementById('next-button').disabled = true;

}

function setupQuestion(questionNumber) {
    document.getElementById('answer0-label').textContent = yourQuestions[questionNumber][1].a;
    document.getElementById('answer1-label').textContent = yourQuestions[questionNumber][1].b;
    document.getElementById('answer2-label').textContent = yourQuestions[questionNumber][1].c;


    switch (yourAnswers[questionNumber]) {
        case '0':
            document.getElementById('answer0').checked = true;
            break;
        case '1':
            document.getElementById('answer1').checked = true;
            break;
        case '2':
            document.getElementById('answer2').checked = true;
            break;

        default:
            document.getElementById('answer0').checked = false;
            document.getElementById('answer1').checked = false;
            document.getElementById('answer2').checked = false;
            break;
    }

    document.getElementById('answer0').removeAttribute('disabled');
    document.getElementById('answer1').removeAttribute('disabled');
    document.getElementById('answer2').removeAttribute('disabled');
    document.getElementById('the-question').innerText = yourQuestions[questionNumber][0];

    updateQuestionFeedback(questionNumber);

    // setup navigational buttons
    document.getElementById('previous-button').disabled = false;
    document.getElementById('next-button').disabled = false;

    if (questionNumber == 0) {
        document.getElementById('return-button').hidden = false;
        document.getElementById('previous-button').hidden = true;
    }
    else {
        document.getElementById('previous-button').hidden = false;
        document.getElementById('return-button').hidden = true;
    }

    if (questionNumber == (yourQuestions.length - 1)) {
        document.getElementById('finish-button').hidden = false;
        document.getElementById('next-button').hidden = true;
    }
    else {
        document.getElementById('next-button').hidden = false;
        document.getElementById('finish-button').hidden = true;
    }

}

function nextQuestion() {
    currentQuestion += 1;
    setupQuestion(currentQuestion)
}

function previousQuestion() {
    currentQuestion -= 1;
    setupQuestion(currentQuestion)
}

function returnFromQuestions() {

    //reset quiz data    
    yourAnalysis = yourQuiz[1];
    yourQuestions = yourQuiz.slice(2);

    //reset quiz setup
    yourAnswers = Array(yourQuestions.length).fill('-1');
    currentQuestion = -1;

    hideElements(['questions-element']);
    unhideElements(['quiz-setup', 'intro']);

}

function setupAnalysis() {
    hideElements(['questions-element']);
    unhideElements(['results-frame']);

    document.getElementById('results-title').innerText = yourAnalysis[0]

    document.getElementById('result0-title').innerText = yourAnalysis[1].a[0]
    document.getElementById('result1-title').innerText = yourAnalysis[1].b[0]
    document.getElementById('result2-title').innerText = yourAnalysis[1].c[0]

    document.getElementById('result0-details').innerHTML = yourAnalysis[1].a[1]
    document.getElementById('result1-details').innerHTML = yourAnalysis[1].b[1]
    document.getElementById('result2-details').innerHTML = yourAnalysis[1].c[1]

    document.getElementById('result0-progress-bar').style = "width: " + parseInt(quizResultsPercentages[0]) + "%";
    document.getElementById('result1-progress-bar').style = "width: " + parseInt(quizResultsPercentages[1]) + "%";
    document.getElementById('result2-progress-bar').style = "width: " + parseInt(quizResultsPercentages[2]) + "%";
    document.getElementById('skipped-progress-bar').style = "width: " + parseInt(skippedQuestionsPercentage) + "%";

    if (Math.max(...quizResults) != 0) {
        if (quizResults[0] == Math.max(...quizResults)) { document.getElementById('collapseOne').classList += " show"; }
        else if (quizResults[1] == Math.max(...quizResults)) { document.getElementById('collapseTwo').classList += " show"; }
        else if (quizResults[2] == Math.max(...quizResults)) { document.getElementById('collapseThree').classList += " show"; }
    }

}

function finishQuestions() {

    calculateResults();
    setupAnalysis();

}

function calculateResults() {

    yourAnswers.forEach(answer => {
        switch (answer) {
            case '0':
                quizResults[0]++;
                break;
            case '1':
                quizResults[1]++;
                break;
            case '2':
                quizResults[2]++;
                break;
            default:
                skippedQuestionsCount++;
                break;
        }
    });

    skippedQuestionsPercentage = ((skippedQuestionsCount / selectedQuizLength) * 100);

    quizResultsPercentages = quizResults;
    quizResultsPercentages.forEach((percentage, index) => {
        quizResultsPercentages[index] = ((percentage / selectedQuizLength) * 100)
    });

}

function saveAnswer(answer) {
    yourAnswers[currentQuestion] = answer;
    updateQuestionFeedback();
}

function updateQuestionFeedback() {
    if (yourAnswers[currentQuestion] < 0) {
        document.getElementById('answered-state-feedback').innerHTML = "<i>Question not yet answered</i>";
        document.getElementById('answered-state-feedback').classList.add('unanswered');
        document.getElementById('answered-state-feedback').classList.remove('answered');
    }
    else {
        document.getElementById('answered-state-feedback').innerHTML = "<i>Answer Saved</i>";
        document.getElementById('answered-state-feedback').classList.add('answered');
        document.getElementById('answered-state-feedback').classList.remove('unanswered');
    }
}

function hideElements(elements) {
    elements.forEach(element => {
        document.getElementById(element).hidden = true;
    });
}

function unhideElements(elements) {
    elements.forEach(element => {
        document.getElementById(element).hidden = false;
    });
}

function beginQuiz(quizLength, elementsToHide) {

    currentQuestion = 0;

    document.getElementById('next-button').disabled = false;
    selectedQuizLength = parseInt(quizLength);                 //just incase value recieved is a string
    yourQuestions = yourQuestions.slice(-selectedQuizLength);  //Keeps only the last x many questions
    yourAnswers = yourAnswers.slice(-selectedQuizLength);    //Keeps only the last x many answers

    hideElements(elementsToHide);
    unhideElements(['questions-element']);
    setupQuestion(currentQuestion);
}