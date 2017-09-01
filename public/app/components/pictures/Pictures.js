/**
 * Created by Pierre Larboulette on 29/08/2017.
 */

import React, { PropTypes } from 'react';
import axios from 'axios'
import Picture from "./Picture";

const PicturesView = ({pictures, filter}) => {


    return (
        <div>

            {pictures
                .map ( picture =>
                    <Picture key={picture.title} picture={picture} />
                )
            }
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
        this.state = {
            pictures :[],
        }
    }

    async getPictures () {
        const pictureOfTheDay = await axios.get('/api/potd');

        const { date, explanation, hdurl, media_type, title, url  } = pictureOfTheDay.data;
        const picture = {
            date,
            explanation,
            hdurl,
            media_type,
            title,
            url
        };

        const pictures = this.state.pictures;
        if (pictures.filter( picture => picture.title === title).length === 0)
            pictures.push(picture);

        this.setState({
            pictures
        });

        console.log("Get pictures !")
    };

    render () {
        return (
            <div>
                <button onClick={(e) => this.getPictures()}> Click </button>
                <PicturesView pictures={this.state.pictures} />
            </div>
        )
    }
}

export default Pictures;