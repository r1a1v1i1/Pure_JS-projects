// Story data structure (using functions for readability)
function createStoryPart(text, options) {
    return { text, options };
  }
  
  function createEnding(text) {
    return { text, end: true };
  }
  
  const story = {
    intro: createStoryPart(
      "You wake up in a dark forest, the air thick with mist. You can barely see a few feet in front of you. What do you do?"
    ),
    options: [
      {
        text: "Explore the forest further",
        next: "forest",
      },
      {
        text: "Call out for help",
        next: "call",
      },
    ],
    forest: createStoryPart(
      "You venture deeper into the forest, the trees growing thicker and the path less clear. Suddenly, you hear a rustling in the bushes. Do you investigate or turn back?"
    ),
    call: createStoryPart(
      "You shout out for help, your voice echoing through the silent trees. A moment later, you hear a faint response in the distance. Do you follow the sound or stay put?"
    ),
    investigate: createEnding(
      "You cautiously approach the bushes, heart pounding. As you part the leaves, you see a small deer grazing peacefully. Relieved, you continue on your way."
    ),
    clearing: createStoryPart(
      "You retrace your steps back to the clearing. As you emerge from the trees, you see a path leading out of the forest. Do you follow the path or explore the clearing further?"
    ),
    // ... other story parts follow the same structure ...
    village: createEnding(
      "Following the map, you eventually..." // Add your ending text here
    ),
  };
  
  // Function to display the story and choices
  function displayStory(currentPart) {
    document.getElementById("story").textContent = currentPart.text;
    const choicesElement = document.getElementById("choices");
    choicesElement.innerHTML = ""; // Clear previous choices
    if (currentPart.end) {
      return; // Exit if it's an ending
    }
    for (const option of currentPart.options) {
      const button = document.createElement("button");
      button.textContent = option.text;
      button.addEventListener("click", () => displayStory(story[option.next]));
      choicesElement.appendChild(button);
    }
  }
  
  // Start the story
  displayStory(story.intro);
  