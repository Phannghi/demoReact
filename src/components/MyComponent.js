import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfo from './DisplayInfo';

class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: 'One piece', age: '18' },
            { id: 2, name: 'Joy boy', age: '79' },
            { id: 3, name: 'Maguire', age: '23' },
        ]
    };
    handleAddNewUser = (userObj) => {
        console.log(userObj);
        this.setState({
            listUser: [userObj, ...this.state.listUser],
        })
    };
    render() {
        return (
            <div>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
                <br />
                <DisplayInfo listUser={this.state.listUser} />
            </div>
        );
    }
}
export default MyComponent; 