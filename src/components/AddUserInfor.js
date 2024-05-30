import React, { useState } from 'react';

// class AddUserInfor extends React.Component {
//     state = {
//         firstName: '',
//         brand: 'Gucci',
//         car: 'Lambo',
//         age: ''
//     };
//     handleOnchangeInput = (event) => {
//         this.setState({
//             firstName: event.target.value
//         })
//     }
//     handleOnchangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }
//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         console.log(this.state);
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + '- random',
//             name: this.state.firstName,
//             age: this.state.age,
//         });
//     }
//     render() {
//         return (
//             <div>
//                 My name is {this.state.firstName} and my age is {this.state.age}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name: </label>
//                     <input
//                         value={this.state.firstName}
//                         type="text"
//                         onChange={(event) => this.handleOnchangeInput(event)} />

//                     <label>Your age: </label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={(event) => this.handleOnchangeAge(event)} />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }
const AddUserInfor = (props) => {
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('Gucci');
    const [car, setCar] = useState('Lambo');
    const [age, setAge] = useState('');

    const handleOnchangeInput = (event) => {
        setName(event.target.value);
    }
    const handleOnchangeAge = (event) => {
        setAge(event.target.value);
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '- random',
            name: name,
            age: age,
        });
    }
    return (
        <div>
            My name is {name} and my age is {age}, my brand is {brand} and i drive my {car}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name: </label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => handleOnchangeInput(event)} />

                <label>Your age: </label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => handleOnchangeAge(event)} />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddUserInfor;