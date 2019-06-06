/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/img-redundant-alt */
// react libraries
import React, { Component } from 'react';

// styles
import './ArticlePage.scss';

// components
import Navbar from 'components/NavBar';
import Footer from 'components/Footer';
import ArticleCardLarge from '../../components/ArticleCards';

export default class ArticlePage extends Component {
  componentDidMount() {
  }

  fetchArticle = (e, articleSLug) => {
    e.preventDefault();
    // const { title, description, body } = this.state;
    sessionStorage.setItem('articleSlug', articleSLug);
  };

  render() {
    return (
      <div className="canvas">
        <div className="landing">
          <Navbar />
        </div>
        <div className="breadcrumbs" align="left">
          <ul>
            <li><img src="http://localhost:8080/src/assets/images/breadcrumbs.png" alt="breadcrumbs" />/Articles</li>
          </ul>
        </div>
        <div className="searchPanel">
          <div className="filterPanel">
            <p className="filerHeader"><b>FILTERS:</b></p>
            <p className="filterLinks">
              |<a href="/articles/">My Articles</a>|
              <a href="/articles/">Todays Articles</a>|
              <a href="/articles/">Most Popular</a>|
              <a href="/articles/">Most Liked</a>|
              <a href="/articles/">Trending</a>|
            </p>
          </div>
          <form>
            <input type="text" className="search-bar" />
            <button type="submit" className="search-bar">SEARCH</button>
          </form>
        </div>
        <div align="center" className="articlesCanvas">
          <div className="articleContainer">
            <ArticleCardLarge />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
