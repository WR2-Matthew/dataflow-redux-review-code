import React, { Component } from 'react';
import User from './Components/User';
import ReduxExamples from './Components/ReduxExamples';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    //This.state in this component is referring to App. This's context means App.js
    this.state = {
      username: 'Handsome Squidward'
    }
  }

  //Arrow function has implicit binding.
  namechange = (newName) => {
    this.setState({ username: newName })
  }

  render() {
    const { username } = this.state;
    return (
      // JSX Elements use attributes. 
      <div className="App">
        {/* Props are structured like attributes but they are data/functions that we 
        name and send to child components */}
        <User username={username} hometown='Bikini Bottom' nameFn={this.namechange} />
        {/* Props can be dynamic data like our state or hardcoded like the hometown props we 
        are sending to our User component. */}

        <ReduxExamples />
      </div>
    );
  }
}

export default App;
