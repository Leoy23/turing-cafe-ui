import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            guests: '',
            error: '',
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    // submitReservation = (event) => {
    //     event.preventDefault();
    //     const newResy = {
    //         id: Date.now();
    //         ...this.state
    //     }

    // }

    clearInputs() {
        this.setState({
            name: '',
            date: '',
            time: '',
            guests: ''
        })
    }

    render() {
        return(
            <form>
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={this.state.name}
                    onChange={event => this.handleChange(event)}
                />
                   <input
                    type='date'
                    placeholder='Date'
                    name='date'
                    value={this.state.date}
                    onChange={event => this.handleChange(event)}
                />
                   <input
                    type='time'
                    placeholder='Time'
                    name='time'
                    value={this.state.time}
                    onChange={event => this.handleChange(event)}
                />
                   <input
                    type='number'
                    placeholder='Number Of Guests'
                    name='guests'
                    value={this.state.guests}
                    onChange={event => this.handleChange(event)}
                />
                <button onClick={(event) => this.submitReservation(event)}></button>
            </form>
        )
    }
}


export default Form;