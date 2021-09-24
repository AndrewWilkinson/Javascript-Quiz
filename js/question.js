let yourQuestions = [["What's Your Learning Style", {instructions: "For these questions, choose the first answer that comes to mind."}],
    ["When you study for a test, would you rather",
{a: "read notes, read headings in a book, and look at diagrams and illustrations.",
b: "have someone ask you questions, or repeat facts silently to yourself.",
c: "write things out on index cards and make models or diagrams."}
],
["Which of these do you do when you listen to music?",
{a: "daydream (see things that go with the music)",
b: "hum along",
c: "move with the music, tap your foot, etc."},
]];

let selectedQuizLength = 5;
let yourAnswers = Array(selectedQuizLength).fill(-1);
let currentQuestion = 1;



function saveAnswer(answer, feedback)
{
    yourAnswers[currentQuestion] = answer;
    
    document.getElementById(feedback).innerHTML = "<i>Answer Saved</i>";
}
