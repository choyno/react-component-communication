import React, {Component} from 'react';
import './App.css';

import Parent from './components/parentToChild/parent';

class App extends Component {

  state = {
    title: "Place Holder title"
  }

  sameEvent = (newTitle) => {
    this.setState({title: newTitle});
  }

  render(){
    return (
      <div className="App">
        <Parent 
          changeTheWorldEvent={this.sameEvent.bind(this, 'new world')}
          keetTheWorldSameEvent={this.sameEvent.bind(this,'same world')}
          title={this.state.title}
        />
      </div>
    );
  }
}

export default App;
