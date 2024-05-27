import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfo from './DisplayInfo';

class MyComponent extends React.Component {
    render() {
        const myAge = 300;
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfo name="One piece" age={myAge} />
                <br />
                <DisplayInfo name="Joy boy" age="500" />
            </div>
        );
    }
}
export default MyComponent; 