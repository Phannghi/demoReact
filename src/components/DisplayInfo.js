import React from 'react';
import './DisplayInfo.scss';
import Junk from '../Junk.png';

class DisplayInfo extends React.Component {
    constructor(props) {
        console.log('call constructor: run first')
        super(props);
        this.state = {
            isShowUser: true
        };
    }

    handleShowUser = () => {
        this.setState({
            isShowUser: !this.state.isShowUser
        })
    }
    componentDidMount() {
        console.log('>> call me component did mount');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('>> call me component did update', this.props, prevProps);
        if (this.props.listUser !== prevProps.listUser) {
            if (this.props.listUser.length == 5)
                alert(">> you got 5 users");
        }
    }
    render() {
        console.log('>> call me render');
        const { listUser } = this.props;
        //console.log(listUser);
        return (
            <div className='display-info-container'>
                {/* <img src={Junk} alt="" /> */}
                <div>
                    <button onClick={() => { this.handleShowUser() }}>{this.state.isShowUser ? 'Hide' : 'Show'} list users</button>
                </div>
                {this.state.isShowUser &&
                    <>
                        {listUser.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 18 ? 'green' : 'red'}>
                                    <div>
                                        <div>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                    </div>
                                    <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
                                    <hr />
                                </div>
                            );
                        })}
                    </>
                }
            </div>
        )
    }
}
export default DisplayInfo;