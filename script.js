const story = {
  start: {
    text: "You wake up at the edge of a dark forest. Two paths lie ahead.",
    choices: [
      { text: "Take the left path", next: "leftPath" },
      { text: "Take the right path", next: "rightPath" }
    ]
  },

  leftPath: {
    text: "You walk left and find a quiet river flowing gently.",
    choices: [
      { text: "Drink from the river", next: "river" },
      { text: "Follow the river downstream", next: "village" }
    ]
  },

  rightPath: {
    text: "The right path leads to a cave with strange noises inside.",
    choices: [
      { text: "Enter the cave", next: "cave" },
      { text: "Run back", next: "start" }
    ]
  },

  river: {
    text: "The water refreshes you. You feel stronger. You win! 🎉",
    choices: [
      { text: "Play again", next: "start" }
    ]
  },

  village: {
    text: "You find a friendly village and rest safely. You win! 🏡",
    choices: [
      { text: "Play again", next: "start" }
    ]
  },

  cave: {
    text: "A monster appears! You were not prepared. Game over 💀",
    choices: [
      { text: "Try again", next: "start" }
    ]
  }
};

const storyText = document.getElementById("story-text");
const choicesDiv = document.getElementById("choices");

function showStory(nodeKey) {
  const node = story[nodeKey];
  storyText.textContent = node.text;
  choicesDiv.innerHTML = "";

  node.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.onclick = () => showStory(choice.next);
    choicesDiv.appendChild(button);
  });
}

// Start the game
showStory("start");
