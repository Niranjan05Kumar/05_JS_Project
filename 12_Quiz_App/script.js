import { questions } from "./questions.js";

const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const timerText = document.querySelector(".timer-text");
const questionText = document.querySelector(".content .question-text");
const answerOptions = document.querySelector(".content .answer-options");
const optionA = document.querySelector(".optionA");
const optionB = document.querySelector(".optionB");
const optionC = document.querySelector(".optionC");
const optionD = document.querySelector(".optionD");
const nextQuesBtn = document.querySelector(".next-ques-btn");
const answerOptionLi = document.querySelectorAll(".answer-option");
const questionStatus = document.querySelector(".question-status");
const quizTimer = document.querySelector(".timer-text b");
const resultContainer = document.querySelector(".result-container");
const tryAgainBtn = document.querySelector(".try-again-btn");
const startQuizBtn = document.querySelector(".start-quiz");
const categoryOption = document.querySelectorAll(".category-option");
const NoOfQuestion = document.querySelectorAll(".number-option");
const timer = document.querySelector(".timer");
const categoryTitle = document.querySelector(".category-title");

let quizCategory = "Programming";
let categoryQues = null;
let randQueNo = null;
let quesIndexHistory = [];
let NumberOfQuestions = 5;
const maxQuizTime = 15;
let currentTime = maxQuizTime;
let quizTimerInterval = null;
let correctAnswers = 0;

function randomQuestion() {
  categoryQues = questions.find(
    (ques) => ques.category.toLowerCase() === quizCategory.toLowerCase()
  );
  randQueNo = Math.floor(Math.random() * categoryQues.questions.length);

  if (
    quesIndexHistory.length >=
    Math.min(NumberOfQuestions, categoryQues.questions.length)
  ) {
    return showResult();
  }

  renderQuestionOption();
  dontRepeatQuestion();
}

randomQuestion();

function renderQuestionOption() {
  questionText.textContent = categoryQues.questions[randQueNo].question;
  optionA.textContent = categoryQues.questions[randQueNo].options[0];
  optionB.textContent = categoryQues.questions[randQueNo].options[1];
  optionC.textContent = categoryQues.questions[randQueNo].options[2];
  optionD.textContent = categoryQues.questions[randQueNo].options[3];

  answerOptionLi.forEach((option) => {
    option.classList.remove("correct", "incorrect");
    option.querySelector(".right-answer").style.display = "none";
    option.querySelector(".wrong-answer").style.display = "none";
    option.style.pointerEvents = "auto";
  });

  nextQuesBtn.style.visibility = "hidden";
  timer.style.backgroundColor = "royalblue";

  questionStatus.innerHTML = `<b>${quesIndexHistory.length}</b> of <b>${NumberOfQuestions}</b> Questions`;

  resetQuizTimer();
  startQuizTimer();
}
function dontRepeatQuestion() {
  if (quesIndexHistory.length >= categoryQues.questions.length) {
    quesIndexHistory = [];
  }
  const availableIndices = [];
  for (let i = 0; i < categoryQues.questions.length; i++) {
    if (!quesIndexHistory.includes(i)) {
      availableIndices.push(i);
    }
  }
  randQueNo =
    availableIndices[Math.floor(Math.random() * availableIndices.length)];
  quesIndexHistory.push(randQueNo);
}
function startQuizTimer() {
  quizTimerInterval = setInterval(() => {
    currentTime--;
    quizTimer.textContent = currentTime;
    if (currentTime <= 0) {
      clearInterval(quizTimerInterval);
      answerOptionLi[
        categoryQues.questions[randQueNo].correctAnswer
      ].classList.add("correct");
      answerOptionLi[
        categoryQues.questions[randQueNo].correctAnswer
      ].querySelector(".right-answer").style.display = "block";
      answerOptionLi.forEach((option) => {
        option.style.pointerEvents = "none";
      });
      nextQuesBtn.style.visibility = "visible";
      timer.style.backgroundColor = "red";
    }
  }, 1000);
}
function resetQuizTimer() {
  clearInterval(quizTimerInterval);
  currentTime = maxQuizTime;
  quizTimer.textContent = currentTime;
}
function showResult() {
  quizContainer.style.display = "none";
  resultContainer.style.display = "flex";
  let resultText = `You answered <b>${correctAnswers}</b> out of <b>${NumberOfQuestions}</b> questions correctly. Great effort!`;
  resultContainer.querySelector("p").innerHTML = resultText;
}
function resetQuiz() {
  quizContainer.style.display = "none";
  resultContainer.style.display = "none";
  configContainer.style.display = "flex";
  correctAnswers = 0;
  quesIndexHistory = [];
  resetQuizTimer();
}
function startQuiz() {
  quizContainer.style.display = "flex";
  configContainer.style.display = "none";
  resultContainer.style.display = "none";
  randomQuestion();
  categoryTitle.textContent = quizCategory;
}
categoryOption.forEach((selectCategory) => {
  selectCategory.addEventListener("click", () => {
    selectCategory.classList.add("active");
    quizCategory = selectCategory.textContent;
    categoryOption.forEach((category) => {
      if (category !== selectCategory) {
        category.classList.remove("active");
      }
    });
  });
});
NoOfQuestion.forEach((selectNoOfQuestion) => {
  selectNoOfQuestion.addEventListener("click", () => {
    NumberOfQuestions = parseInt(selectNoOfQuestion.textContent);
    selectNoOfQuestion.classList.add("active");
    NoOfQuestion.forEach((number) => {
      if (number !== selectNoOfQuestion) {
        number.classList.remove("active");
      }
    });
  });
});
answerOptionLi.forEach((li, index) => {
  li.addEventListener("click", () => {
    if (index === categoryQues.questions[randQueNo].correctAnswer) {
      li.classList.add("correct");
      li.querySelector(".right-answer").style.display = "block";
      correctAnswers++;
    } else {
      li.classList.add("incorrect");
      li.querySelector(".wrong-answer").style.display = "block";
      answerOptionLi[
        categoryQues.questions[randQueNo].correctAnswer
      ].classList.add("correct");
      answerOptionLi[
        categoryQues.questions[randQueNo].correctAnswer
      ].querySelector(".right-answer").style.display = "block";
    }
    answerOptionLi.forEach((option) => {
      option.style.pointerEvents = "none";
    });
    nextQuesBtn.style.visibility = "visible";
    clearInterval(quizTimerInterval);
  });
});

nextQuesBtn.addEventListener("click", randomQuestion);
tryAgainBtn.addEventListener("click", resetQuiz);
startQuizBtn.addEventListener("click", startQuiz);
