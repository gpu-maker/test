const story = {
  start: {
    text: "You stand at the edge of a pixel forest. Two paths await.",
    image: "images/forest.png",
    choices: [
      { text: "LEFT PATH", next: "leftPath" },
      { text: "RIGHT PATH", next: "rightPath" }
    ]
  },

  leftPath: {
    text: "A river shimmers in chunky pixels.",
    image: "images/river.png",
    choices: [
      { text: "DRINK WATER", next: "river" },
      { text: "FOLLOW RIVER", next: "village" }
    ]
  },

  rightPath: {
    text: "A cave breathes darkness.",
    image: "images/cave.png",
    choices: [
      { text: "ENTER CAVE", next: "cave" },
      { text: "RUN BACK", next: "start" }
    ]
  },

  river: {
    text: "HP RESTORED. YOU WIN.",
    image: "images/river.png",
    choices: [
      { text: "PLAY AGAIN", next: "start" }
    ]
  },

  village: {
    text: "A village of 8-bit heroes welcomes you.",
    image: "images/village.png",
    choices: [
      { text: "PLAY AGAIN", next: "start" }
    ]
  },

  cave: {
    text: "YOU WERE NOT READY.",
    image: "images/cave.png",
    choices: [
      { text: "TRY AGAIN", next: "start" }
    ]
  }
};

const storyText = document.getElementById("story-text");
const storyImage = document.getElementById("story-image");
const choicesDiv = document.getElementById("choices");

function showStory(key) {
  const node = story[key];
  storyText.textContent = node.text;
  storyImage.src = node.image;

  choicesDiv.innerHTML = "";
  node.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => showStory(choice.next);
    choicesDiv.appendChild(btn);
  });
}

showStory("start");
