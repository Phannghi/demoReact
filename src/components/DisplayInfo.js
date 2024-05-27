import React from 'react';

class DisplayInfo extends React.Component {
    render() {
        //console.log(this.props);
        const { listUser } = this.props;
        return (
            <div>
                {listUser.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My name is {user.name}</div>
                            <div>My age is {user.age}</div>
                        </div> 
                    );
                })}
            </div>
        )
    }
}
export default DisplayInfo;