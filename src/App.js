import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {
        name: "Daktari",
        age: 23
      },
      {
        name: "Daisy",
        age: 21
      },
      {
        name: "Dede",
        age: 20
      }
    ],
    otherState: 'some other value'
  }

  switchNameHandler  = (newName, newAge) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 23
        },
        {
          name: "Khaindi",
          age: newAge
        },
        {
          name: "Dede",
          age: 20
        }
      ]
    })

  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('James', 25)}>Switch Name</button>
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
        />
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Sweetie', 19)}>My hobbies: eating chocolate
        </Person>
        <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
