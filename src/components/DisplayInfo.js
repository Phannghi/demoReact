import React from 'react';
import './DisplayInfo.scss'

class DisplayInfo extends React.Component {
    state = {
        isShowUser: true
    };
    handleShowUser = () => {
        this.setState({
            isShowUser: !this.state.isShowUser
        })
    }
    render() {
        const { listUser } = this.props;
        //console.log(listUser);
        return (
            <div className='display-info-container'>
                <div>
                    <button onClick={() => { this.handleShowUser() }}>{this.state.isShowUser ? 'Hide' : 'Show'} list users</button>
                </div>
                {this.state.isShowUser &&
                    <div>
                        {listUser.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 18 ? 'green' : 'red'}>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                </div>
                            );
                        })}
                    </div>
                }
            </div>
        )
    }
}
export default DisplayInfo;