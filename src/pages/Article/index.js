/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/img-redundant-alt */
// react libraries
import React, { Component } from 'react';

// styles
import './ArticlePage.scss';

// components
import Navbar from 'components/NavBar';
import Footer from 'components/Footer';
import { connect } from 'react-redux';
import ArticleCardLarge from '../../components/ArticleCards';
import { getOneArticle } from '../../store/actions/articleActions';

export class ArticlePage extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { getArticle, match: { params: { slug } } } = this.props;
    getArticle(slug);
  }

  fetchArticle = (e) => {
    e.preventDefault();
    // const { title, description, body } = this.state;
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { article } = this.props;
    return (
      <div className="canvas">
        <div className="landing">
          <Navbar />
        </div>
        <div className="breadcrumbs" align="left">
          <ul>
            <li><img src="http://localhost:8080/src/assets/images/breadcrumbs.png" alt="breadcrumbs" />/<a href="/articles"><b>Articles</b></a>/Article/</li>
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
            <ArticleCardLarge {...article} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { article } = state.articleReducer;
  return { article };
};

const mapDispatchToProps = slug => dispatch => ({
  getArticle(slug) {
    dispatch(getOneArticle(slug));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
