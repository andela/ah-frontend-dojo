/* eslint-disable react/prop-types */
// react libraries
import React, { Component } from 'react';

// styles
import './ArticleCardLarge.scss';

// components
import Tagslist from 'components/TagsList';
import { defaultImgURL, formatDate, readMinutes } from 'utils';
import ArticleLikeDislike from 'components/ArticleLikeDislike';
import Comments from 'components/Comments';

export default class ArticleCardLarge extends Component {
  render() {
    const {
      title,
      body,
      description,
      author,
      updatedAt,
      time_to_read,
    } = this.props;
    const articleImg = `${defaultImgURL}/images/banner.jpg`;
    return (
      <div className="mainCanvas">
        <div className="cardCanvas">
          <div className="titlePanel">
            <p>{ title }</p>
          </div>
          <div className="imagePanel">
            <img src={articleImg} alt="article img" />
          </div>
          <div className="flexedRow">
            <div className="columnPanel aurthorPanel">
              <div className="authorAvartar">
                <img src="http://localhost:8080/src/assets/images/avartar.jpg" alt="article img" />
              </div>
              <div className="authorName">
                <p align="left">
                  <b>{ author }</b>
                  <br />
                  <button type="submit" className="buttonSmall buttonLarge">
                    View profile
                  </button>
                </p>
              </div>
            </div>
            <div className="columnPanel align-inText-right lightedParagraph">
              <p>
                <b>Date: </b>
                { formatDate(updatedAt) }
              </p>
              <p>
                { readMinutes(time_to_read) }
                Read
              </p>
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
              {/* { read_stats[0].views } */}
            </p>
          </div>
          {/* articleLikeDislike component here */}
          <ArticleLikeDislike />
          {/* tagsList component here */}
          <Tagslist />
          <div className="splitLine" />
          <div className="commentsPanel">
            <Comments />
          </div>
        </div>
      </div>
    );
  }
}
