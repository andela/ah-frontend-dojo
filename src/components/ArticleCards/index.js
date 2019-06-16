// react libraries
import React, { Component } from 'react';

// styles
import './ArticleCardLarge.scss';

// components
import Comments from '../Comments';

export default class ArticleCardLarge extends Component {
  render() {
    return (
      <div className="mainCanvas">
        <div className="cardCanvas">
          <div className="titlePanel">
            <p>this is an article title</p>
          </div>
          <div className="imagePanel">
            <img src="http://localhost:8080/src/assets/images/banner.jpg" alt="article img" />
          </div>
          <div className="flexedRow">
            <div className="columnPanel aurthorPanel">
              <div className="authorAvartar">
                <img src="http://localhost:8080/src/assets/images/banner.jpg" alt="article img" />
              </div>
              <div className="authorName">
                <p align="left">
                  <b>Zack Atama</b>
                  <form>
                    <buttom type="submit" className="buttonSmall buttonLarge">
                      View profile
                    </buttom>
                  </form>
                </p>
              </div>
            </div>
            <div className="columnPanel align-inText-right lightedParagraph">
              <p>
                <b>Date: </b>
                02-06-2019
              </p>
              <p>
                <b>Read time: </b>
                2mins
              </p>
            </div>
          </div>
          <div className="bodyPanel">
            <p>
            rerum tempore vitae sequi sint nihil reprehenderi
            dolor beatae ea dolores neque fugiat blanditiis
            voluptate porro vel nihil molestiae ut reiciendis
            qui aperiam non debitis possimus qui ad mollitia
            et omnis minus architecto odit voluptas doloremque
            maxime aut non ipsa qui alias veniam blanditiis
            culpa aut quia nihil cumque facere et occaecati qui
            aspernatur quia eaque ut aperiam inventore ad
            mollitia et omnis minus architecto odit voluptas doloremque
            maxime aut non ipsa qui alias veniam
            blanditiis culpa aut quia nihil cumque facere et occaecati
            qui aspernatur quia eaque ut aperiam
            inventore ad mollitia et omnis minus architecto odit
            voluptas doloremque maxime aut non ipsa qui
            alias veniam blanditiis culpa aut quia nihil cumque
            facere et occaecati qui aspernatur quia eaque ut
            aperiam inventore ad mollitia et omnis minus architecto
            odit voluptas doloremque maxime aut non ipsa
            </p>
          </div>
          <div className="additionalDetails inlinePosition">
            <p>
              <b>Average Rating: </b>
              3.9 (2000)
            </p>
            <p>
              <b>Views: </b>
              1000
            </p>
            <p>
              <b>Likes: </b>
              230
            </p>
            <p>
              <b>Dislikes: </b>
              12
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
