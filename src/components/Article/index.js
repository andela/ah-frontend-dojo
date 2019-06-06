// react libraries
import React, { Component } from 'react';

// third-party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// styles
import 'components/Loader/Loader.scss';
import 'components/Footer/Footer.scss';
import './Article.scss';

// components
import Navbar from 'components/NavBar';
import Footer from 'components/Footer';
import { newArticle } from 'store/actions/articleActions';


export class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: '',
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
                <img src="https://res.cloudinary.com/andelaprojects/image/upload/v1561099269/breadcrumbs_qot92i.png" alt="breadcrumbs" />
                /Create Article/
              </li>
            </ul>
          </div>
          <div className="inputPanel" align="center">
            <div className="inputPanel__inputForm">
              <form onSubmit={this.handleSubmit}>
                <input
                  className="inputPanel__inputForm--input"
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={this.handleChange}
                  required
                />
                <input
                  className="inputPanel__inputForm--input"
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Description"
                  value={description}
                  onChange={this.handleChange}
                  required
                />
                <textarea
                  className="inputPanel__inputForm--textarea"
                  type="text"
                  name="body"
                  placeholder="Body"
                  value={body}
                  onChange={this.handleChange}
                  required
                />
                <button
                  className="inputPanel__inputForm--button"
                  type="submit"
                  name="createArtile"
                >
                  Create Article
                </button>
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

export const mapStateToProps = ({ articleReducer: article }) => (article);

export const mapDispatchToProps = dispatch => ({
  createArticle(articleData) { dispatch(newArticle(articleData)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
