
import React, {PropTypes } from 'react';

class Picture extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name : props.name,
        }
    }

    render () {
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}

Picture.propTypes = {
    name : PropTypes.string,
};

export default Picture;
