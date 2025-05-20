const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

checkBtn.addEventListener("click", () => {
  const inputmsg = document.querySelector("#input-text").value;

  const newMsg = inputmsg.toLowerCase();

  if (newMsg === "") {
    result.innerText = "Please Enter Text";
    result.className = "error";
    return;
  }

  const reversedInput = newMsg.split("").reverse().join("");

  if (newMsg === reversedInput) {
    result.innerText = "It's a Palindrome!";
    result.className = "success";
  } else {
    result.innerText = "It's not a Palindrome!";
    result.className = "error";
  }
});
