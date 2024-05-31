import React, { useEffect, useState } from 'react';
import './DisplayInfo.scss';

const DisplayInfo = (props) => {
    const { listUser } = props;
    const [isShowListUsers, setShowListUser] = useState(true);
    const handleShowHideUser = () => {
        setShowListUser(!isShowListUsers);
    }
    useEffect(() => {
        setTimeout(() => {
            if (listUser.length === 0) {
                alert("You delete all users")
            }
        }, 1000);
        console.log('>> call me effect')
    }, [listUser])

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