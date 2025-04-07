let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let buttonArray = Array.from(buttons);

let displaystr = "";

buttonArray.forEach((btn) => {

  btn.addEventListener("click", (e) => {
    
    if (e.target.innerHTML == "=") {
      displaystr = eval(displaystr);
      display.value = displaystr;
    } else if (e.target.innerHTML == "AC") {
      displaystr = "";
      display.value = displaystr;
    } else if (e.target.innerHTML == "DEL") {
      // displaystr = displaystr.slice(0, -1);
      displaystr = displaystr.substring(0, displaystr.length - 1);
      display.value = displaystr;
    } else {
      displaystr += e.target.innerHTML;
      display.value = displaystr;
    }

  });

});
