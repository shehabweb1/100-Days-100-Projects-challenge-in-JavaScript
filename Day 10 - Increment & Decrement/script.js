(function () {
  const buttons = document.querySelectorAll(".counterBtn");
  let count = 0;

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.classList.contains("incBtn")) {
        count++;
      } else if (button.classList.contains("decBtn")) {
        count--;
      }

      const counter = document.getElementById("counter");
      counter.textContent = count;

      if (count > 0) {
        counter.style.color = "green";
      } else if (count < 0) {
        counter.style.color = "red";
      } else {
        counter.style.color = "#333";
      }
    });
  });
})();