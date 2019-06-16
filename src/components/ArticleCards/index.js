/* eslint-disable react/prop-types */
// react libraries
import React, { Component } from 'react';

// styles
import './ArticleCardLarge.scss';

// components
import { formatDate } from 'utils';
import Comments from '../Comments';

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
    return (
      <div className="mainCanvas">
        <div className="cardCanvas">
          <div className="titlePanel">
            <p>{ title }</p>
          </div>
          <div className="imagePanel">
            <img src="http://localhost:8080/src/assets/images/banner.jpg" alt="article img" />
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
                <b>Read time: </b>
                { time_to_read }
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
              {/* { read_stats.views } */}
            </p>
            <p>
              <b>Likes: </b>
              {/* { likeCount.likes } */}
            </p>
            <p>
              <b>Dislikes: </b>
              {/* { likeCount.dislikes } */}
            </p>
          </div>
          <div className="additionalDetails inlinePosition">
            <p>
              <b>Tags: </b>
              <button type="submit" className="buttonSmall">Default</button>
              <button type="submit" className="buttonSmall pythonTag">Python</button>
              <button type="submit" className="buttonSmall javascriptTag">JavaScript</button>
              <button type="submit" className="buttonSmall djangoTag">Django 2.1</button>
              <button type="submit" className="buttonSmall reactTag">React</button>
              <button type="submit" className="buttonSmall reduxTag">Redux</button>
            </p>
          </div>
          <div className="splitLine" />
          <div className="commentsPanel">
            <Comments />
          </div>
        </div>
      </div>
    );
  }
}
