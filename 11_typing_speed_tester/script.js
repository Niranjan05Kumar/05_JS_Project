let typingText = document.querySelector(".typing-text p");
let inputField = document.querySelector("#input-field");
let Mistakes = document.querySelector("#Mistakes span");
let time = document.querySelector("#time span b");
let wpm = document.querySelector("#wpm span");
let cpm = document.querySelector("#cpm span");
let tryAgain = document.querySelector("#try-again button");

function randomParagraph() {
  let randomIndex = Math.floor(Math.random() * paragraphs.length);

  typingText.innerHTML = "";
  paragraphs[randomIndex].split("").forEach((spanLatter) => {
      let spanTag = `<span>${spanLatter}</span>`;
      typingText.innerHTML += spanTag;
    });
    
  typingText.querySelectorAll("span")[0].classList.add("active");
  document.addEventListener("keydown", () => inputField.focus());
  typingText.addEventListener("click", () => inputField.focus());
}

randomParagraph();

let charIndex = 0;
let MistakesCount = 0;
let istyping = 0;
let timer;
let maxTime = 60;
let leftTime = maxTime;

function initTyping() {
  let characters = typingText.querySelectorAll("span");
  let typedChars = inputField.value.split("")[charIndex];

  if (charIndex < characters.length - 1 && leftTime > 0) {
    if (!istyping) {
      timer = setInterval(timerleft, 1000);
      istyping = true;
    }

    if (typedChars == null) {
      charIndex--;
      if (characters[charIndex].classList.contains("incorrect")) {
        MistakesCount--;
      }
      characters[charIndex].classList.remove("correct", "incorrect");
    } else {
      if (characters[charIndex].innerText === typedChars) {
        characters[charIndex].classList.add("correct");
      } else {
        MistakesCount++;
        characters[charIndex].classList.add("incorrect");
      }
      charIndex++;
    }

    characters.forEach((span) => {
      span.classList.remove("active");
    });

    characters[charIndex].classList.add("active");

    Mistakes.innerHTML = MistakesCount;

    cpm.innerHTML = charIndex - MistakesCount;

    let wpmCount = Math.round(
      ((charIndex - MistakesCount) / 5 / (maxTime - leftTime)) * 60
    );
    wpmCount =
      wpmCount < 0 || !wpmCount || wpmCount === Infinity ? 0 : wpmCount;

    wpm.innerHTML = wpmCount;
  } else {
    inputField.value = "";
    clearInterval(timer);
  }
}

function timerleft() {
  if (leftTime > 0) {
    leftTime--;
    time.innerHTML = leftTime;
  } else {
    clearInterval(timer);
  }
}

function resetPara(){
    randomParagraph();
    inputField.value = "";
    clearInterval(timer);
    leftTime = maxTime;
    charIndex = MistakesCount = istyping = 0;
    time.innerHTML = leftTime;
    Mistakes.innerHTML = MistakesCount;
    wpm.innerHTML = 0;
    cpm.innerHTML = 0;
}

inputField.addEventListener("input", initTyping);
tryAgain.addEventListener("click", resetPara);