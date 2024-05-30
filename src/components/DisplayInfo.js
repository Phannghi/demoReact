import React, { useState } from 'react';
import './DisplayInfo.scss';
//import Junk from '../Junk.png';

//Stateless vs Stateful
// class DisplayInfo extends React.Component {
//     render() {
//         console.log('>> call me render');
//         const { listUser } = this.props;
//         //console.log(listUser);
//         return (
//             <div className='display-info-container'>
//                 {true &&
//                     <>
//                         {listUser.map((user) => {
//                             return (
//                                 <div key={user.id} className={user.age > 18 ? 'green' : 'red'}>
//                                     <div>
//                                         <div>My name is {user.name}</div>
//                                         <div>My age is {user.age}</div>
//                                     </div>
//                                     <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
//                                     <hr />
//                                 </div>
//                             );
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfo = (props) => {
    const { listUser } = props;
    const [isShowListUsers, setShowListUser] = useState(true);
    const handleShowHideUser = () => {
        setShowListUser(!isShowListUsers);
    }
    return (
        <div className='display-info-container'>
            <div>
                <button onClick={() => { handleShowHideUser() }}>
                    {isShowListUsers ? "Hide list users" : "Show list users"}
                </button>
            </div>
            {isShowListUsers &&
                <>
                    {listUser.map((user) => {
                        return (
                            <div key={user.id} className={user.age > 18 ? 'green' : 'red'}>
                                <div>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                </div>
                                <button onClick={() => { props.handleDeleteUser(user.id) }}>Delete</button>
                                <hr />
                            </div>
                        );
                    })}
                </>
            }
        </div>
    )
};
export default DisplayInfo;