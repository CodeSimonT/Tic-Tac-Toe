let prevButton = null;

const wrapper = document.getElementById("wrapper");

wrapper.addEventListener("click", (e) => {
  const isButton = e.target.nodeName === "LABEL";

  if (!isButton) {
    return;
  }

  e.target.previousElementSibling.classList.add("activeButton"); // Add .active CSS Class
  e.target.classList.add("activeButton");

  if (prevButton !== null) {
    prevButton.classList.remove("activeButton"); // Remove .active CSS Class
    prevButton.previousElementSibling.classList.remove("activeButton");
  }

  prevButton = e.target;
});

const items = [
  {
    question: "Choose the correct HTML element to define emphasized text",
    option: ["em", "i", "italic", "bold"],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Who is making the Web standards?",
    option: ["Microsoft", "Mozilla", "The World Wide Web", "Google"],
    answer: "The World Wide Web",
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    option: ["heading", "head", "h6", "h1"],
    answer: "h1",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    option: ["break", "br", "lb", "lbm"],
    answer: "br",
  },
  {
    question: "Choose the correct HTML element to define important text",
    option: ["i", "strong", "b", "important"],
    answer: "br",
  },
];

let currentScore = 0;
let quistionIndex = 0;

function callQ() {
  let quistionNumber = items[quistionIndex];
  // document.querySelector(`numbarPageDesign${quistionIndex + 1}`);
}
