// react libraries
import React, { Component } from 'react';

// styles
import './Articles.scss';

// third party libraries
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// thunks (action creators)
import { getAllMyAricles } from 'store/actions/articleActions';

class Articles extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { getMyAricles } = this.props;
    getMyAricles();
  }

  render() {
    const { articles } = this.props;
    const articlesList = articles.map(article => (
      <div key={article.id} className="articleCard">
        <p className="articleTitle">{ article.title }</p>
        <p className="articleAuthor">{ article.author }</p>
        <p className="articleBody">{ article.body }</p>
      </div>
    ));
    return (
      <div align="center">
        <div className="mainPage">
          <div className="header">
            <div className="right-header-panel" align="right">
              <div className="authContainer" align="center">
                <li><a href="http://localhost:8080/login">Sign in</a></li>
                <li>|</li>
                <li><a href="http://localhost:8080/signup">Sign up</a></li>
              </div>
              <button type="button" className="button botton-size-1">Home</button>
              <button type="button" className="button botton-size-1 active-botton">Articles</button>
            </div>
            <img src="../src/assets/logo.png" alt="logo" className="logo" />
            <div className="breadcrumbs" align="left">
              <ul>
                <li>Articles</li>
              </ul>
            </div>
          </div>
          <div>
            <input type="text" className="search-bar" />
          </div>
          <div className="articlesContainer" align="left">
            {articlesList}
          </div>
        </div>
      </div>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publish_status: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    delete_status: PropTypes.bool.isRequired,
    tagList: PropTypes.arrayOf(
      PropTypes.string,
    ),
    time_to_read: PropTypes.number.isRequired,
    read_stats: PropTypes.shape({
      views: PropTypes.number.isRequired,
      reads: PropTypes.number.isRequired,
    }),
    likeCount: PropTypes.arrayOf(PropTypes.shape({
      likes: PropTypes.number.isRequired,
      dislikes: PropTypes.number.isRequired,
    })),
  })),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = state => state.articles;

const mapDispatchToProps = dispatch => bindActionCreators({
  getMyAricles: getAllMyAricles,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
