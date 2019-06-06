/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getArticle, newArticle } from '../../store/actions/articleActions';
import './Article.scss';

export class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      article: {
        title: '',
        description: '',
        body: '',
        tagList: [],
      },
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const articleData = {
      article: {
        title: this.state.title,
        description: this.state.description,
        body: this.state.body,
        tagList: [],
      },
    };
    this.props.createArticle(articleData);
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <div align="center">
        <div className="mainPage">
          <div className="header">
            <div className="right-header-panel" align="right">
              <div className="authContainer" align="center">
                <li><a href="http://localhost:8080/login">{sessionStorage.getItem('username')}</a></li>
                <li>|</li>
                <li><a href="http://localhost:8080/signup">Sign out</a></li>
              </div>
              <button type="button" className="button botton-size-1">Home</button>
              <button type="button" className="button botton-size-1 active-botton">Articles</button>
            </div>
            <img src="../src/assets/logo.png" alt="logo" className="logo" />
            <div className="breadcrumbs" align="left">
              <ul>
                <li><a href="http://localhost:8080/articles/"><b>Articles</b></a></li>
                <li> / </li>
                <li>Create Article</li>
              </ul>
            </div>
          </div>
          <div className="inputPanel" align="left">
            <div className="inputForm">
              {/* <div className="loader"></div> */}
              <form onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Title" value={this.setState.title} onChange={this.onChange} />
                <input type="text" id="description" name="description" placeholder="Description" value={this.setState.description} onChange={this.onChange} />
                <textarea type="text" name="body" placeholder="Body" value={this.setState.body} onChange={this.onChange} />
                <button type="submit">Create Article</button>
              </form>
            </div>
          </div>
          <div>
            <input type="text" className="search-bar" />
          </div>
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line react/no-typos
Article.propTypes = {
  createArticle: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  article: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string,
    tagList: PropTypes.array,
  }),
};

const mapDispatchToProps = dispatch => ({
  createArticle(articleData) { dispatch(newArticle(articleData)); }
});

const mapStateToProps = state => ({
  article: state.article
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
