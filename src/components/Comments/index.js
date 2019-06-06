// react libraries
import React, { Component } from 'react';

// styles
import './Comments.scss';


export default class Comments extends Component {
  render() {
    return (
      <div className="CommentsContainer">
        <div className="commentForm" align="left">
          <form>
            <textarea type="text" placeholder="Write a comment here ...." />
            <button type="submit">Comment</button>
          </form>
        </div>
        {/* <div className="commentsList">
          <div className="commentCard">
            <div className="commentAuthor">
              <p>asf</p>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
