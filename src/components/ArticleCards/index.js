// react libraries
import React, { Component } from 'react';

// styles
import './ArticleCardLarge.scss';

// components
import Tagslist from 'components/TagsList';
import Comments from 'components/Comments';
import PropTypes from 'prop-types';

// helper function
import { formatDate, isAuthenticated } from 'utils';

export const checkOwner = (author, article_id, deleteArticle) => {
  if (isAuthenticated().username === author) {
    return (
      <div className="protectedButtons" align="right">
        <a href={`/article_edit/${article_id}`} className="blue">Edit</a>
        <form onSubmit={deleteArticle}>
          <button type="submit" className="red">Delete</button>
        </form>
      </div>
    );
  }
  return ('');
};

export default class ArticleCardLarge extends Component {
  constructor(props) {
    super(props);
    this.props = {
      article: {
        id: 0,
        title: '',
        body: '',
        description: '',
        author: '',
        updatedAt: '',
        time_to_read: '',
      }
    };
  }

  onDeleteArticle = (e) => {
    e.preventDefault();
  };

  render() {
    const {
      article: {
        id, title, description, body, updatedAt, author, time_to_read
      }
    } = this.props;
    return (
      <div className="mainCanvas">
        <div className="mainCanvas__cardCanvas">
          <div className="mainCanvas__cardCanvas__titlePanel">
            <p>{ title }</p>
          </div>
          <div className="mainCanvas__cardCanvas__titlePanel__imagePanel">
            <img
              src="https://res.cloudinary.com/andelaprojects/image/upload/v1561099197/banner_hrpjdt.jpg"
              alt="article img"
            />
          </div>
          <div className="mainCanvas__cardCanvas__titlePanel__flexedRow">
            <div className="mainCanvas__cardCanvas__titlePanel__flexedRow__columnPanel">
              <div className="mainCanvas__cardCanvas__titlePanel__flexedRow__columnPanel__aurthorPanel">
                <img
                  className="mainCanvas__cardCanvas__titlePanel__flexedRow__columnPanel__aurthorPanel--authorAvartar"
                  src="https://res.cloudinary.com/andelaprojects/image/upload/v1561099197/banner_hrpjdt.jpg"
                  alt="article img"
                />
                <div
                  className="mainCanvas__cardCanvas__titlePanel__flexedRow__columnPanel__aurthorPanel--authorName"
                >
                  <p align="left">
                    <b>{ author }</b>
                    <br />
                    <button type="submit" className="buttonSmall buttonLarge">
                      View profile
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="mainCanvas__cardCanvas__titlePanel__flexedRow__columnPanel">
              <div className="mainCanvas__cardCanvas__titlePanel__flexedRow__columnPanel__articleDetails_1 align-inText-right lightedParagraph">
                <p>
                  <b>Date: </b>
                  { formatDate(updatedAt) }
                </p>
                <p>
                  <b>Read time: </b>
                  { time_to_read }
                </p>
              </div>
            </div>
          </div>
          <div className="bodyPanel">
            <p className="description">{ description }</p>
            <p>{ body }</p>
          </div>
          <div className="additionalDetails inlinePosition">
            <p>
              <b>Average Rating: </b>
              3.9 (2000)
            </p>
            <p>
              <b>Views: </b>
              (0000)
            </p>
            <p>
              <b>Likes: </b>
              (0000)
            </p>
            <p>
              <b>Dislikes: </b>
              (0000)
            </p>
          </div>
          <Tagslist />
          {checkOwner(author, id, this.del)}
          <div className="splitLine" />
          <div className="commentsPanel">
            <Comments />
          </div>
        </div>
      </div>
    );
  }
}

ArticleCardLarge.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    updatedAt: PropTypes.string,
    time_to_read: PropTypes.number,
  }),
};

ArticleCardLarge.defaultProps = {
  article: {
    id: 0,
    title: '',
    body: '',
    description: '',
    author: '',
    updatedAt: '',
    time_to_read: '',
  }
};
