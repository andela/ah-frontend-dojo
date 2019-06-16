/* eslint-disable react/no-unused-state */
// react libraries
import React, { Component } from 'react';

// third-party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// styles
import 'components/Loader/Loader.scss';
import 'components/Footer/Footer.scss';
import './Article.scss';
import './ArticleOnly.scss';

// components
import Navbar from 'components/NavBar';
import Footer from 'components/Footer';
// import ProgressLoader from 'components/Loader/ProgressLoader';

import { newArticle } from '../../store/actions/articleActions';


export class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: '',
      tagList: [],
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, body } = this.state;
    const articleData = {
      article: {
        title,
        description,
        body,
        tagList: [],
      },
    };

    const { createArticle } = this.props;

    createArticle(articleData);
    window.location = '/articles/';
  }

  render() {
    const { title, description, body } = this.state;
    return (
      <div className="canvas">
        <div className="landing">
          <Navbar />
          <div className="breadcrumbs" align="left">
            <ul>
              <li>
                <img src="http://localhost:8080/src/assets/images/breadcrumbs.png" alt="breadcrumbs" />
                /Create Article/
              </li>
            </ul>
          </div>
          {/* <ProgressLoader /> */}
          <div className="inputPanel" align="center">
            <div className="inputForm">
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={title} onChange={this.handleChange} required />
                <input type="text" id="description" name="description" placeholder="Description" value={description} onChange={this.handleChange} required />
                <textarea type="text" name="body" placeholder="Body" value={body} onChange={this.handleChange} required />
                <button type="submit" name="createArtile">Create Article</button>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  createArticle: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => {
  const { article } = state.articleReducer;
  return { article };
};

export const mapDispatchToProps = dispatch => ({
  createArticle(articleData) { dispatch(newArticle(articleData)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
