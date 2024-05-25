import React from 'react';

class MyComponent extends React.Component {
    render() {
        return (
            <div> my Component
                {Math.random()}
            </div>
        );
    }
}
export default MyComponent;