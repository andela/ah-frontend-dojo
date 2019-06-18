// react libraries
import React, { Component } from 'react';

// third party libraries
import IosThumbsUpOutline from 'react-ionicons/lib/IosThumbsUpOutline';
import IosThumbsDownOutline from 'react-ionicons/lib/IosThumbsDownOutline';

// styles
import './ArticleLikeDislike.scss';

export default class ArticleLikeDislike extends Component {
  render() {
    return (
      <div className="likeDislikePanel">
        <div className="like">
          <IosThumbsUpOutline color="#2D6686" fontSize="1.5rem" cursor="pointer" />
          <b>Likes: </b>
        </div>
        <div className="dislike">
          <IosThumbsDownOutline color="#2D6686" />
          <b>Dislikes: </b>
        </div>
      </div>
    );
  }
}
