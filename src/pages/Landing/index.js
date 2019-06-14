// react libraries
import React, { Component } from 'react';

// third-party libraries
import { ToastContainer } from 'react-toastify';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// styles
import './Landing.scss';

// components
import Navbar from 'components/NavBar';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import { getAllArticles } from 'store/actions/articleActions';
import ArticleColumn from './ArticleColumn';


export class LandingPage extends Component {
  componentDidMount() {
    const { getArticles } = this.props;

    // fetch articles
    getArticles();
  }

  render() {
    const { articles, isFetching } = this.props;
    return (

      // Navbar
      <div>
        <ToastContainer autoClose={3000} />
        <div className="landing">
          <Navbar />
          <div className="banner-image" />

          {/* Welcome message */}
          <div className="welcome-pitch">
            <div className="welcome-pitch__left">
              <p>
                Welcome to
              </p>
              <h3>
                Authors Haven
              </h3>
            </div>
            <div className="welcome-pitch__right">
              <p>
                Intrigue your interests
              </p>
              <p>
                Broaden your world
              </p>
              <p>
                Tell your story
              </p>
            </div>
          </div>
          {isFetching ? <Loader /> : null}
          {/* Article preview grid */}
          <div className="article-grid">
            <ArticleColumn columnTitle="Most Popular" articles={articles} />
            <ArticleColumn columnTitle="Most Liked" articles={articles} />
            <ArticleColumn columnTitle="Most Recent" articles={articles} />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

// proptype validation
LandingPage.propTypes = {
  getArticles: PropTypes.func,
  isFetching: PropTypes.bool,
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

LandingPage.defaultProps = {
  articles: [],
  isFetching: false,
  getArticles: () => { },
};

/**
 * This is a function to pass the state as a prop.
 * @param {state}  - The state
 * @return {articles} - An aray of articles
 *
 */
const mapStateToProps = state => state.articles;
/**
 * This is a function to pass the state as a prop.
 * @param {dispatch}  - The dispatch function
 * @return {getArticles} - The thunk to fetch articles
 *
 */
const mapDispatchToProps = dispatch => bindActionCreators({
  getArticles: () => getAllArticles(),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
