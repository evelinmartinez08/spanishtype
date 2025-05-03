function pickWord(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  
  window.TypingBox = {
    pickWord
  };
  