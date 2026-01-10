function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "31948e150bf00b4a5d0t27b4o0e755ac";
  let prompt = `User instructions: Generate a french poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic Poem expert and love to  write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element and write in <em>. Do not add this  and the html word.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛Generating a French poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
