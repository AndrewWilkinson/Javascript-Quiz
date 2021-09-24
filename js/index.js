let yourQuiz = [["What's Your Learning Style", { instructions: "For these questions, choose the first answer that comes to mind." }],
["Three Different Learning Styles",
    {
        a: ["Visual Learner:", "<ul><li> take numerous detailed notes</li><li> tend to sit in the front</li><li> are usually neat and clean</li><li> often close their eyes to visualize or remember something</li><li> find something to watch if they are bored</li><li> like to see what they are learning</li><li> benefit from illustrations and presentations that use color</li><li> are attracted to written or spoken language rich in imagery</li><li> prefer stimuli to be isolated from auditory and kinesthetic distraction</li><li> find passive surroundings ideal</li><ul>"],
        b: ["Auditory Learner:", "<ul><li> sit where they can hear but needn't pay attention to what is happening in front</li><li> may not coordinate colors or clothes, but can explain why they are wearing what they are wearing and why</li><li> hum or talk to themselves or others when bored</li><li> acquire knowledge by reading aloud</li><li> remember by verbalizing lessons to themselves (if they don't they have difficulty reading maps or diagrams or handling conceptual assignments like mathematics).</li></ul>"],
        c: ["Kinesthetic Learner:", "<ul><li> need to be active and take frequent breaks</li><li> speak with their hands and with gestures</li><li> remember what was done, but have difficulty recalling what was said or seen</li><li> find reasons to tinker or move when bored</li><li> rely on what they can directly experience or perform</li><li> activities such as cooking, construction, engineering and art help them perceive and learn</li><li> enjoy field trips and tasks that involve manipulating materials</li><li> sit near the door or someplace else where they can easily get up and move around</li><li> are uncomfortable in classrooms where they lack opportunities for hands-on experience</li><li> communicate by touching and appreciate physically expressed encouragement, such as a pat on the back</li></ul>"]
    }
],
["When you study for a test, would you rather",
    {
        a: "read notes, read headings in a book, and look at diagrams and illustrations.",
        b: "have someone ask you questions, or repeat facts silently to yourself.",
        c: "write things out on index cards and make models or diagrams."
    }
],
["Which of these do you do when you listen to music?",
    {
        a: "daydream (see things that go with the music)",
        b: "hum along",
        c: "move with the music, tap your foot, etc."
    },
],
["When you work at solving a problem do you",
    {
        a: "make a list, organize the steps, and check them off as they are done",
        b: "make a few phone calls and talk to friends or experts",
        c: "make a model of the problem or walk through all the steps in your mind"
    }
],
["When you read for fun, do you prefer",
    {
        a: "a travel book with a lot of pictures in it",
        b: "a mystery book with a lot of conversation in it",
        c: "a book where you answer questions and solve problems"
    }
],
["To learn how a computer works, would you rather",
    {
        a: "watch a movie about it",
        b: "listen to someone explain it",
        c: "take the computer apart and try to figure it out for yourself"
    }
],
["You have just entered a science museum, what will you do first?",
    {
        a: "look around and find a map showing the locations of the various exhibits",
        b: "talk to a museum guide and ask about exhibits",
        c: "go into the first exhibit that looks interesting, and read directions later"
    }
],
["What kind of restaurant would you rather not go to?",
    {
        a: "one with the lights too bright",
        b: "one with the music too loud",
        c: "one with uncomfortable chairs"
    }
],
["Would you rather go to",
    {
        a: "an art class",
        b: "a music class",
        c: "an exercise class"
    }
],
["Which are you most likely to do when you are happy?",
    {
        a: "grin",
        b: "shout with joy",
        c: "jump for joy"
    }
],
["If you were at a party, what would you be most likely to remember the next day?",
    {
        a: "the faces of the people there, but not the names",
        b: "the names but not the faces",
        c: "the things you did and said while you were there"
    }
],
["When you see the word \"d - o - g\", what do you do first?",
    {
        a: "think of a picture of a particular dog",
        b: "say the word \"dog\" to yourself silently",
        c: "sense the feeling of being with a dog (petting it, running with it, etc.)"
    }
],
["When you tell a story, would you rather",
    {
        a: "write it",
        b: "tell it out loud",
        c: "act it out"
    }
],
["What is most distracting for you when you are trying to concentrate?",
    {
        a: "visual distractions",
        b: "noises",
        c: "other sensations like, hunger, tight shoes, or worry"
    }
],
["What are you most likely to do when you are angry?",
    {
        a: "scowl",
        b: "shout or \"blow up\"",
        c: "stomp off and slam doors"
    }
],
["When you aren't sure how to spell a word, which of these are you most likely to do?",
    {
        a: "write it out to see if it looks right",
        b: "sound it out",
        c: "write it out to see if it feels right"
    }
],
["Which are you most likely to do when standing in a long line at the movies?",
    {
        a: "look at posters advertising other movies",
        b: "talk to the person next to you",
        c: "tap your foot or move around in some other way"
    }
]];

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

    if (questionNumber == (yourQuestions.length -1)) {
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

function setupAnalysis()
{
    hideElements(['questions-element']);
    unhideElements(['results-frame']);

    document.getElementById('results-title').innerText = yourAnalysis[0]

    document.getElementById('result0-title').innerText = yourAnalysis[1].a[0]
    document.getElementById('result1-title').innerText = yourAnalysis[1].b[0]
    document.getElementById('result2-title').innerText = yourAnalysis[1].c[0]

    document.getElementById('result0-details').innerHTML = yourAnalysis[1].a[1]
    document.getElementById('result1-details').innerHTML = yourAnalysis[1].b[1]
    document.getElementById('result2-details').innerHTML = yourAnalysis[1].c[1]

    document.getElementById('result0-progress-bar').style = "width: " + parseInt(quizResultsPercentages[0]) +"%";
    document.getElementById('result1-progress-bar').style = "width: " + parseInt(quizResultsPercentages[1]) +"%";
    document.getElementById('result2-progress-bar').style = "width: " + parseInt(quizResultsPercentages[2]) +"%";
    document.getElementById('skipped-progress-bar').style = "width: " + parseInt(skippedQuestionsPercentage) +"%";

    if (Math.max(...quizResults) != 0)
    {
    if (quizResults[0] == Math.max(...quizResults))
    {    document.getElementById('collapseOne') .classList += " show";}
    else if (quizResults[1] == Math.max(...quizResults))
    {    document.getElementById('collapseTwo').classList += " show";}
    else if (quizResults[2] == Math.max(...quizResults)) 
    {    document.getElementById('collapseThree').classList += " show";}
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
        quizResultsPercentages[index] = ( (percentage / selectedQuizLength) * 100)
    });

}

function saveAnswer(answer) {
    yourAnswers[currentQuestion] = answer;
    updateQuestionFeedback();
}

function updateQuestionFeedback() {
    if (yourAnswers[currentQuestion] == -1)
        document.getElementById('answered-state-feedback').innerHTML = "<i>Question not yet answered</i>";
    else
        document.getElementById('answered-state-feedback').innerHTML = "<i>Answer Saved</i>";
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

    selectedQuizLength = parseInt(quizLength);                 //just incase value recieved is a string
    yourQuestions = yourQuestions.slice(-selectedQuizLength);  //Keeps only the last x many questions
    yourAnswers = yourAnswers.slice(-selectedQuizLength);    //Keeps only the last x many answers

    hideElements(elementsToHide);
    unhideElements(['questions-element']);
    setupQuestion(currentQuestion);
}