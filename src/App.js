import React, { Component } from 'react';
import './App.css';
import SateliteList from './components/SateliteList.js';
import SateliteInfo from './components/SateliteInfo.js';
import satelites from './samples/satelites.json'

class App extends Component{

  state = {
    sateliteSelected : {id: 0, name: '', description: ''}
  }

  showSateliteInfo = satelite => {
      this.setState({sateliteSelected: satelite})
  }

  render(){
    return (
      <div>
        <div className='header'>
          <h1>Spacing (Satélites Artificiales)</h1>
        </div>
        <div className='list-satelites'>
          <SateliteList satelites={satelites} showSateliteInfo={this.showSateliteInfo}/>
        </div>
        <div className='satelite-info'>
          <SateliteInfo sateliteInfo={this.state}/>
        </div>
        <div className='footer'>
            <p>Powered by React.</p>
        </div>    
      </div>);  
  }
}

export default App;