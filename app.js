const hrsInput = document.getElementById("hrs");
minsInput = document.getElementById("mins");
secsInput = document.getElementById("secs");
doneButton = document.getElementById("done");
startButton = document.querySelector(".start");
clearButton = document.querySelector(".clear");
hrsContent = document.querySelector("#time .hrs");
minsContent = document.querySelector("#time .mins");
secsContent = document.querySelector("#time .secs");
hrs = mins = secs = 0;

let interval;

function timerContent(hrs, mins, secs) {
  hrsContent.textContent = hrs.toString().padStart(2, "0");
  minsContent.textContent = mins.toString().padStart(2, "0");
  secsContent.textContent = secs.toString().padStart(2, "0");
}

doneButton.addEventListener("click", function () {
  hrs = parseInt(hrsInput.value) || 0;
  mins = parseInt(minsInput.value) || 0;
  secs = parseInt(secsInput.value) || 0;

  timerContent(hrs, mins, secs);
  hrsInput.value = "";
  minsInput.value = "";
  secsInput.value = "";
});

startButton.addEventListener("click", function () {
  if (hrs >= 0 && mins >= 0 && secs >= 0) {
    if (startButton.textContent === "Start") {
      interval = setInterval(function () {
        if (secs <= 60 && secs > 0) {
          secs--;
        } else if (secs == 0 && mins <= 60 && mins > 0) {
          mins--;
          secs = 59;
        } else if (secs == 0 && mins == 0 && hrs > 0) {
          hrs--;
          secs = 59;
          mins = 59;
        }
        timerContent(hrs, mins, secs);

        if (hrs == 0 && mins == 0 && secs == 0) {
          clearInterval(interval);
          startButton.textContent = "Start";
          startButton.style.background = "rgb(116, 237, 89)";
        }
      }, 1000);

      startButton.textContent = "Stop";
      startButton.style.background = "red";
    } else {
      clearInterval(interval);
      startButton.textContent = "Start";
      startButton.style.background = "rgb(116, 237, 89)";
    }
  }
});

clearButton.addEventListener("click", function () {
  clearInterval(interval);
  hrs = mins = secs = 0;
  timerContent(0, 0, 0);
  startButton.textContent = "Start";
  startButton.style.background = "rgb(116, 237, 89)";
});
