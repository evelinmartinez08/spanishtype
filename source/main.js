let currentWord = "";
let startTime = null;
let wordCount = 0;
let correctCount = 0;

let words = [];
let sentenceList = [];

const modeSelect = document.getElementById("mode");
let mode = modeSelect.value;

modeSelect.addEventListener("change", () => {
    mode = modeSelect.value;
    startGame();
});


Promise.all([
    fetch("../source/data/sentences-beginner.json").then(res => res.json()),
    fetch("../source/data/vocab-beginner.json").then(res => res.json())
  ])

    .then(([words, sentences]) => {
      wordList = words;
      sentenceList = sentences;
      startGame();
    })
    .catch(err => console.error("Failed to load data:", err));
  
  function startGame() {
    const wordDisplay = document.getElementById("word-display");
    const inputBox = document.getElementById("input-box");
  
    function setNewItem() {
      if (mode === "word") {
        currentItem = TypingBox.pickWord(wordList);
      } else {
        currentItem = TypingBox.pickWord(sentenceList);
      }
      wordDisplay.textContent = currentItem;
    }
  
    inputBox.value = "";
    inputBox.focus();
    setNewItem();

  inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (!startTime) startTime = Date.now();

      const userInput = inputBox.value.trim();
      wordCount++;

      if (userInput === currentItem) {
        correctCount++;
      }

      inputBox.value = "";
      setNewItem();
      StatsDisplay.updateStats(wordCount, correctCount, startTime);
    }
  });

  setNewItem();
}
