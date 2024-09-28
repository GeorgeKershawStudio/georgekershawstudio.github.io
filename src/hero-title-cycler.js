function generateKeyframes(words) {
    const totalWords = words.length;
    const cssKeyframes = [];

    let currentPercentage = 0;
    const increment = 100 / (totalWords * 2); // Total phases: typing + untyping for each word
    
    words.forEach((word) => {
      const wordLength = word.length;

      // Typing phase
      for (let i = 0; i <= wordLength; i++) {
        cssKeyframes.push(`${currentPercentage}% { content: "${word.slice(0, i)}"; }`);
        currentPercentage += increment / (wordLength + 1); // Equal time for each letter
      }

      // Untyping phase
      for (let i = wordLength; i >= 0; i--) {
        cssKeyframes.push(`${currentPercentage}% { content: "${word.slice(0, i)}"; }`);
        currentPercentage += increment / (wordLength + 1); // Equal time for each letter
      }
    });

    // Ensure we don't go over 100%
    if (currentPercentage > 100) {
      currentPercentage = 100;
    }

    // Ensure the final state is empty
    cssKeyframes.push(`100% { content: ""; }`);

    return `@keyframes cycle-words {\n  ${cssKeyframes.join("\n  ")}\n}`;
  }

  function applyKeyframes(keyframesCss) {
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = keyframesCss;
    document.head.appendChild(styleSheet);
  }

  // Example usage
  const words = ["a Passion", "a Joy", "an Art", "a Lifestyle", "an Epitome"]; // Change this to your test words
  const keyframesCss = generateKeyframes(words);
  applyKeyframes(keyframesCss);