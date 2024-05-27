import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfo from './DisplayInfo';

class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: 'One piece', age: 300 },
            { id: 2, name: 'Joy boy', age: 500 },
            { id: 3, name: 'Maguire', age: 222 },
        ]
    };
    render() {
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfo listUser={this.state.listUser} />
            </div>
        );
    }
}
export default MyComponent; 