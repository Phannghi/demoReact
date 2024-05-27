import React from 'react';

class UserInfor extends React.Component {
    state = {
        firstName: 'Nghi',
        brand: 'Gucci',
        car: 'Lambo',
        age: 17
    };
    handleClick(event) {
        console.log(this.state.brand);
        console.log('>>random: ', Math.floor((Math.random() * 100) + 1));
        this.setState({
            firstName: 'Bull',
            age: this.state.age + 1
        })
    }
    handleOnchangeInput = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleOnchangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                My name is {this.state.firstName} and my age is {this.state.age}
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input
                        value={this.state.firstName}
                        type="text"
                        onChange={(event) => this.handleOnchangeInput(event)} />

                    <label>Your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnchangeAge(event)} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;