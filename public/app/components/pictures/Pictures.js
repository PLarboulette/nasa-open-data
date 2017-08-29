/**
 * Created by Pierre Larboulette on 29/08/2017.
 */

import React, { PropTypes } from 'react';

const PicturesView = ({pictures, filter}) => {

    return (
        <div>
            Hello pictures !
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

    getPictures = () => {
        console.log("Get pictures !")
    };

    render () {
        return (
            <div>
                <button onClick={(e) => this.getPictures()} />
                <PicturesView />
            </div>
        )
    }
}

export default Pictures;