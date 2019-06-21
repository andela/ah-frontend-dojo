/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/img-redundant-alt */
// react libraries
import React, { Component } from 'react';

// styles
import './ArticlePage.scss';

// components
import Navbar from 'components/NavBar';
import Search from 'components/Search';
import Footer from 'components/Footer';
import { connect } from 'react-redux';
import ArticleCardLarge from 'components/ArticleCards';
import { getOneArticle } from 'store/actions/articleActions';

export class ArticlePage extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { getArticle, match: { params: { id } } } = this.props;
    getArticle(id);
  }

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
            <li>
              <img src="https://res.cloudinary.com/andelaprojects/image/upload/v1561099269/breadcrumbs_qot92i.png" alt="breadcrumbs" />
              /
              <a href="/articles"><b>Articles</b></a>
              /Article/
            </li>
          </ul>
        </div>
        <Search />
        <div align="center" className="articlesCanvas">
          <div className="articleContainer">
            <ArticleCardLarge article={article} />
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

const mapDispatchToProps = dispatch => ({
  getArticle: (id) => {
    dispatch(getOneArticle(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
