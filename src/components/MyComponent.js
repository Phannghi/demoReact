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
    handleDeleteUser = (userId) => {
        let listUser = [...this.state.listUser];
        listUser = listUser.filter(user => user.id !== userId);
        this.setState({
            listUser: listUser
        });
    };
    render() {
        const test = { name: 'Phan Phuc Nghi', age: '456' };
        return (
            <>
                {JSON.stringify(test)} xin chao cac ban
                <br />
                <div className='a'>
                    <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
                    <br />
                    <DisplayInfo
                        listUser={this.state.listUser}
                        handleDeleteUser={this.handleDeleteUser} />
                </div>
                <div className="b">

                </div>
            </>

        );
    }
}
export default MyComponent; 