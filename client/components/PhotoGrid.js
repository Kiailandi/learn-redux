import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
    render() {
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, index) => <Photo {...this.props} key={index} post={post} i={index} />)}
            </div>
        )
    }
});

export default PhotoGrid;
