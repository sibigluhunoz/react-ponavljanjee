import './App.css';
import { Component } from 'react';
import Kompa from './components/Kompa';
import KlasnaKompa from './components/KlasnaKompa';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Algebra',
      age: 33,
      count: 0,
      color: 'black',
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    if (this.state.count === 5) {
      this.setState({ color: 'green' });
    }
  };

  render() {
    return (
      <div className="App">
        <h1 style={{ color: this.state.color }}>React aplikacija</h1>
        <Kompa greet="pozdrav" num={10} nick="niko" />
        <Kompa greet="hello" num={9} nick="nešto" />
        <Kompa
          greet={this.state.name}
          num={this.state.age}
          nick="nešto drugo"
        />
        <KlasnaKompa />
        <h2>Brojač: {this.state.count}</h2>
        <button onClick={this.handleClick}>Up</button>
      </div>
    );
  }
}

export default App;
