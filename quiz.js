const data = [
  {
    id: 1,
    question: "What is the capital of South Korea?",
    answers: [
      { answer: "Busan", isCorrect: false },
      { answer: "Tokyo", isCorrect: false },
      { answer: "Seoul", isCorrect: true },
      { answer: "Osaka", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "What is the currency of Denmark?",
    answers: [
      { answer: "Euro", isCorrect: false },
      { answer: "Dollor", isCorrect: false },
      { answer: "Krone", isCorrect: true },
      { answer: "Krona", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "In which European country would you find the Rijksmuseum?",
    answers: [
      { answer: "Netherlands", isCorrect: true },
      { answer: "France", isCorrect: false },
      { answer: "Germany", isCorrect: false },
      { answer: "Spain", isCorrect: false },
    ],
  },
  {
    id: 2,
    question:
      "Street artist Banksy is originally associated with which city in the UK?",
    answers: [
      { answer: "Manchester", isCorrect: false },
      { answer: "London", isCorrect: false },
      { answer: "Glasgow", isCorrect: false },
      { answer: "Bristol", isCorrect: true },
    ],
  },
  {
    id: 1,
    question: "What is the capital of New Zealand?",
    answers: [
      { answer: "Wellington", isCorrect: true },
      { answer: "Sydney", isCorrect: false },
      { answer: "Auckland", isCorrect: false },
      { answer: "Melbourne", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "From what grain is the Japanese spirit Sake made?",
    answers: [
      { answer: "Rice", isCorrect: true },
      { answer: "Wheat", isCorrect: false },
      { answer: "Corn", isCorrect: false },
      { answer: "Sweet Potato", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  showQuestion(qIndex);
};

play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers: ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers: ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = `Score: ${
    (correctCount - wrongCount) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
    <div class="answer">
    <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
    <label for="1">${item.answer}</label>
    </div>
    `
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else alert("Select an answer!");
  });
};

showQuestion(qIndex);
submitAnswer();
