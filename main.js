//body 
const body = $("body");


//top, title, score sections
const titleDiv = $(
  "<div id='app-title'><h1>JEOPARDY</h1><div id='score-div'>YOUR SCORE: 0</div></div>"
);
body.append(titleDiv);



//created jeopardy board elements prior to styling
const boardSection = $("<div id='gridBoard'></div>");
body.append(boardSection);
for (let i = 0; i < 5; i++) {
  const value100s = $("<div class='box board-100'>$100</div>");
  boardSection.append(value100s);
}
for (let i = 0; i < 5; i++) {
  const value200s = $("<div class='box board-200'>$200</div>");
  boardSection.append(value200s);
}
for (let i = 0; i < 5; i++) {
  const value400s = $("<div class='box board-400'>$400</div>");
  boardSection.append(value400s);
}
for (let i = 0; i < 5; i++) {
  const value600s = $("<div class='box board-600'>$600</div>");
  boardSection.append(value600s);
}
for (let i = 0; i < 5; i++) {
  const value800s = $("<div class='box board-800'>$800</div>");
  boardSection.append(value800s);
}



//question & answer will be shown
const questionAndResponseShown = $(
  '<div id="question-response">answer</div>'
);
body.append(questionAndResponseShown);



//section to type answer and scored updates
const boxForAnswer = $(
  '<div id=\'answer-div\'><div id="answer-label" class="answer">YOUR ANSWER: <input type="text" class="answer" id="answer-input"><button id="submit" class="answer">SUBMIT</button></div></div>'
);
body.append(boxForAnswer);




const value100s = $(".board-100");

const value200s = $(".board-200");

const value400s = $(".board-400");

const value600s = $(".board-600");

const value800s = $(".board-800");



const questions100 = QUESTIONS.filter((val) => val.value === "$100");

const questions200 = QUESTIONS.filter((val) => val.value === "$200");

const questions400 = QUESTIONS.filter((val) => val.value === "$400");

const questions600 = QUESTIONS.filter((val) => val.value === "$600");

const questions800 = QUESTIONS.filter((val) => val.value === "$800");



let currQuestion = "";
let currAnswer = "";
let currQuestionVal = "";



for (const btn of value100s) {
  const btn100Value = $(btn);
  btn100Value.click(() => {
    let question =
      questions100[Math.floor(Math.random() * questions100.length).toFixed(0)];
    currQuestion = question.question;
    questionAndResponseShown.text(currQuestion);
    currAnswer = question.answer;
    currQuestionVal = question.value;
    console.log(currAnswer);
  });
}
for (const btn of value200s) {
  const btn200Value = $(btn);
  btn200Value.click(() => {
    let question =
      questions200[Math.floor(Math.random() * questions200.length).toFixed(0)];
    currQuestion = question.question;
    questionAndResponseShown.text(currQuestion);

    currAnswer = question.answer;
    currQuestionVal = question.value;
    console.log(currAnswer);
  });
}

for (const btn of value400s) {
  const btn400Value = $(btn);
  btn400Value.click(() => {
    let question =
      questions400[Math.floor(Math.random() * questions400.length).toFixed(0)];
    currQuestion = question.question;
    questionAndResponseShown.text(currQuestion);

    currAnswer = question.answer;
    currQuestionVal = question.value;
    console.log(currAnswer);
  });
}

for (const btn of value600s) {
  const btn600Value = $(btn);
  btn600Value.click(() => {
    let question =
      questions600[Math.floor(Math.random() * questions600.length).toFixed(0)];
    currQuestion = question.question;
    questionAndResponseShown.text(currQuestion);

    currAnswer = question.answer;
    currQuestionVal = question.value;
    console.log(currAnswer);
  });
}

for (const btn of value800s) {
  const btn800Value = $(btn);
  btn800Value.click(() => {
    let question =
      questions800[Math.floor(Math.random() * questions800.length).toFixed(0)];
    currQuestion = question.question;
    questionAndResponseShown.text(currQuestion);

    currAnswer = question.answer;
    currQuestionVal = question.value;
    console.log(currAnswer);
  });
}



const inputAnswer = $("#answer-input");
const submitBtn = $("#submit");
const displayScore = $("#score-div");
let score = 0;



submitBtn.click(() => {
  if (inputAnswer.val() === currAnswer) {
    questionAndResponseShown.text("Correct!");
    score += Number(currQuestionVal.slice(1));
    displayScore.text(`Your Score: ${score}`);
    inputAnswer.val("");

    

  } else {
    questionAndResponseShown.text(currAnswer);
  }
});
localStorage.removeItem("storedScore");

