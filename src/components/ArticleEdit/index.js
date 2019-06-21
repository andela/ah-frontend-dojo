// react libraries
import React, { Component } from 'react';

// third-party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// styles
import 'components/Loader/Loader.scss';
import 'components/Footer/Footer.scss';
import './ArticleEdit.scss';

// components
import Navbar from 'components/NavBar';
import Footer from 'components/Footer';
import { getOneArticle, editArticle } from 'store/actions/articleActions';
import ProgressLoader from 'components/Loader/ProgressLoader';


export class ArticleEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: '',
      tagList: [],
    };
  }

  componentDidMount() {
    const { getArticle, match: { params: { id } }, article } = this.props;
    getArticle(id);

    this.setState(prevState => ({ ...prevState, article }));
  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      title,
      description,
      body
    } = this.state;
    const articleData = {
      title,
      description,
      body,
      tagList: [],
    };
    const { updateArticle, article } = this.props;

    if (articleData.title === '') {
      articleData.title = article.title;
    }
    if (articleData.description === '') {
      articleData.description = article.description;
    }
    if (articleData.body === '') {
      articleData.body = article.body;
    }

    const articleObject = {
      id: article.id,
      article: articleData,
    };
    updateArticle(articleObject);
  }

  cancelArticleEdit = () => {
    const { article } = this.props;
    window.location = `/article/${article.id}`;
  }

  render() {
    const { article, editProgress } = this.props;
    return (
      <div className="canvas">
        <div className="landing">
          <Navbar />
          <div className="breadcrumbs" align="left">
            <ul>
              <li>
                <img
                  src="https://res.cloudinary.com/andelaprojects/image/upload/v1561099269/breadcrumbs_qot92i.png"
                  alt="breadcrumbs"
                />
                /Edit Article/
              </li>
            </ul>
          </div>
          {editProgress && <ProgressLoader />}
          <div className="inputPanel" align="center">
            <div className="inputForm">
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="title" defaultValue={article.title} onChange={this.handleChange} />
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  onChange={this.handleChange}
                  placeholder={article.description}
                />
                <textarea
                  type="text"
                  name="body"
                  value={article.body}
                />
                <div className="editButtons">
                  <button
                    type="submit"
                    className=""
                    id="edit"
                    name="updateArticle"
                  >
                      Save Changes
                  </button>
                  <button type="button" className="" id="cancel" onClick={this.cancelArticleEdit} name="cancel">Cancel</button>
                </div>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

ArticleEdit.propTypes = {
  getArticle: PropTypes.func.isRequired,
  updateArticle: PropTypes.func.isRequired,
  editProgress: PropTypes.bool,
  match: PropTypes.shape(
    {
      params: PropTypes.shape(
        {
          id: PropTypes.isRequired,
        }
      )
    }
  ).isRequired,
  article: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string,
  })
};

ArticleEdit.defaultProps = {
  editProgress: false,
  article: {
    id: 61,
    title: '',
    description: '',
    body: '',
  }
};

export const mapStateToProps = (state) => {
  const { article, editProgress } = state.articleReducer;
  const articleId = state.articleReducer.article.id;
  return { article, articleId, editProgress };
};

export const mapDispatchToProps = dispatch => ({
  getArticle: (articleData) => { dispatch(getOneArticle(articleData)); },
  updateArticle: (articleData) => { dispatch(editArticle(articleData)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEdit);
