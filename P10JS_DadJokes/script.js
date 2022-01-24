/*jshint esversion: 8 */

const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
var msg = new SpeechSynthesisUtterance();

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com', config);

  const data = await res.json();
  msg.text = data.joke;

  jokeEl.innerHTML = data.joke;
  window.speechSynthesis.speak(msg);
}
// USING .then()
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeEL.innerHTML = data.joke
//         })
//         //console.log(data))
// }