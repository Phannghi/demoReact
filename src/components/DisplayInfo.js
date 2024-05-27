import React from 'react';

class DisplayInfo extends React.Component {
    render(){
        console.log(this.props);
        const {name, age} = this.props;
        // props => properties
        return(
            <div>
                <div>My name is {name}</div>
                <div>My age is {age}</div>
            </div>
        )
    }
}
export default DisplayInfo;