import { Component } from "react";
import Form from "./Form";
import Table from "./Table";

class App extends Component {
  state = {
    characters: [
      { name: "Mehe", job: "Janitor" },
      { name: "Mac", job: "Bouncer" },
      { name: "Dee", job: "Aspiring actress" },
      { name: "Dennis", job: "Bartender" },
    ],
  };

  //fungsi di dalam kelas, dijalankan hanya ketika dipanggil di onClick dsb
  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({
      characters: [...this.state.characters, character],
    });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
