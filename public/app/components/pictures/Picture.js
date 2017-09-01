
import React, {PropTypes } from 'react';


const PictureView = ({picture}) => {

    return (
        <div>
            <p> {picture.title} </p>
            <p> {picture.date} </p>
            <p> {picture.explanation}</p>
            <img src={picture.url}/>
        </div>
    )

};

class Picture extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            picture : props.picture,
        };

    }

    render () {
        return (
            <PictureView picture={this.state.picture} />
        )
    }
}

Picture.propTypes = {
    picture : PropTypes.shape({
        title : PropTypes.string,
        url : PropTypes.string,
        hdurl : PropTypes.string,
        explanation : PropTypes.string,
        media_type : PropTypes.string,
        date : PropTypes.string,
        copyright : PropTypes.string
    }),
};

export default Picture;
