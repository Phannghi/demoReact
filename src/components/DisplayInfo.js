import React from 'react';
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
    //console.log(listUser);
    return (
        <div className='display-info-container'>
            {true &&
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