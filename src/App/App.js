import React, { Component } from 'react';
import Reservations from './../components/Reservations/Reservations'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount() {
     return fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => {
        console.log({data})
        this.setState({reservations: data})
      })
      .catch(error => this.setState({error: error}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
        <Reservations reservations={this.state.reservations}/> 
        </div>
      </div>
    )
  }
}

export default App;
