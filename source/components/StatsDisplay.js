function updateStats(wordCount, correctCount, startTime) {
    const elapsedMinutes = (Date.now() - startTime) / 60000;
    const wpm = Math.round(wordCount / elapsedMinutes);
    const accuracy = wordCount === 0 ? 100 : Math.round((correctCount / wordCount) * 100);
  
    document.getElementById("wpm").textContent = wpm;
    document.getElementById("accuracy").textContent = accuracy + "%";
  }
  
  window.StatsDisplay = {
    updateStats
  };
  