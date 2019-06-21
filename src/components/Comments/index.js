// react libraries
import React, { Component } from 'react';

// styles
import './Comments.scss';

import { defaultImgURL } from 'utils';

export default class Comments extends Component {
  render() {
    return (
      <div className="CommentsContainer">
        <div className="commentForm" align="left">
          <div className="commentAuthor">
            <img src="https://res.cloudinary.com/andelaprojects/image/upload/v1561099494/avartar_rnu8jf.jpg" alt="commenter avartar" />
            <p>Add your comment here</p>
          </div>
          <form>
            <textarea type="text" placeholder="Comment here ...." />
            <button type="submit">Comment</button>
          </form>
        </div>
        <p className="commentStats">
          <b>Comments: </b>
          2
        </p>
        <div className="commentsList">
          <div className="commentCard">
            <div className="commentAuthor">
              <img src="https://res.cloudinary.com/andelaprojects/image/upload/v1561099494/avartar_rnu8jf.jpg" alt="commenter avartar" />
              <p><b>Innocent Lou</b></p>
            </div>
            <div className="commentBody">
              <p>
                rerum tempore vitae sequi sint nihil reprehenderit
                dolor beatae ea dolores neque fugiat blanditiis voluptate
                porro vel nihil molestiae ut reiciendis qui aperiam non
                debitis possimus qui ad mollitia et omnis minus architecto
                odit voluptas doloremque maxime aut non ipsa qui alias
                veniam blanditiis culpa aut quia nihil cumque facere
                et occaecati qui aspernatur quia eaque
              </p>
            </div>
            <div className="additionalDetailsSmall inlinePosition">
              <p>
                <b>Likes: </b>
                10
              </p>
              <p>
                <b>Dislikes: </b>
                2
              </p>
            </div>
          </div>
          <div className="commentCard">
            <div className="commentAuthor">
              <img src="https://res.cloudinary.com/andelaprojects/image/upload/v1561099494/avartar_rnu8jf.jpg" alt="commenter avartar" />
              <p><b>James Mudidi</b></p>
            </div>
            <div className="commentBody">
              <p>
                rerum tempore vitae sequi sint nihil reprehenderit
                dolor beatae ea dolores neque fugiat blanditiis voluptate
                porro vel nihil molestiae ut reiciendis qui aperiam non
                debitis possimus qui ad mollitia et omnis minus architecto
                odit voluptas doloremque maxime aut non ipsa qui alias
                veniam blanditiis culpa aut quia nihil cumque facere
                et occaecati qui aspernatur quia eaque
              </p>
            </div>
            <div className="additionalDetailsSmall inlinePosition">
              <p>
                <b>Likes: </b>
                10
              </p>
              <p>
                <b>Dislikes: </b>
                2
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
