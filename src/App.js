import { Component } from "react";

class App extends Component {
  render() {
    fetch("https://icanhazdadjoke.com/slack")
    .then(data => data.json())
    .then(jokedata => {
      const jokeText = jokedata.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerText = jokeText;
})
    return (
      <div>
        <p id="jokeElement">Loading...</p>
      </div>
    );
  }
}

export default App;
