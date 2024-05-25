import React from 'react';

class MyComponent extends React.Component {
    state = {
        firstName: 'Nghi',
        brand: 'Gucci',
        car: 'Lambo',
        age: 17
    };
    handleClick(event) {
        console.log(this.state.brand);
        console.log('>>random: ', Math.floor((Math.random() * 100) +1 ));
        this.setState({
            firstName : 'Bull',
            age: this.state.age + 1
        })
    }
    handleOnMouseOver(event){
        //console.log(event);
    }   
    render() {
        return (
            <div> 
                My name is {this.state.firstName} and my age is {this.state.age}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
            </div>
        );
    }
}
export default MyComponent;