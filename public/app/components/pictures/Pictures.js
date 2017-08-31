/**
 * Created by Pierre Larboulette on 29/08/2017.
 */

import React, { PropTypes } from 'react';
import Picture from "./Picture";

const PicturesView = ({pictures, filter}) => {

    return (
        <div>
            <Picture name="{'Earth"/>
            <Picture name="{'Mars"/>
        </div>
    )
};

PicturesView.propTypes = {
    pictures : PropTypes.array,
    filter: PropTypes.string,
};

class Pictures extends React.Component {

    constructor (props) {
        super(props);
    }

    getPictures () {
        console.log("Get pictures !")
    };

    render () {
        return (
            <div>
                <button onClick={(e) => this.getPictures()}> Click </button>
                <PicturesView />
            </div>
        )
    }
}

export default Pictures;