// Q6: Button click alert
const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", function () {
  alert("Button clicked!");
});

// Q7: Variables & Conditions (age prompt)
function checkAge() {
  const ageText = prompt("Enter your age:");
  const age = Number(ageText);

  // If user cancels or types something not a number
  if (!ageText || Number.isNaN(age)) {
    console.log("No valid age entered.");
    return;
  }

  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }
}

// Run age check once when page loads
checkAge();

// Q8: DOM manipulation (change title + background)
const changeBtn = document.getElementById("changeBtn");
const mainTitle = document.getElementById("mainTitle");

changeBtn.addEventListener("click", function () {
  mainTitle.textContent = "Title changed using JavaScript!";
  document.body.style.background = "#fff7ed"; // light background
});

// Q9: Counter app
let count = 0;

const countValue = document.getElementById("countValue");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

function updateCount() {
  countValue.textContent = count;
}

increaseBtn.addEventListener("click", function () {
  count = count + 1;
  updateCount();
});

decreaseBtn.addEventListener("click", function () {
  count = count - 1;
  updateCount();
});

// Q10: Simple validation on form submit
const myForm = document.getElementById("myForm");
const nameInput = docu
