/* eslint-disable jsx-a11y/img-redundant-alt */
// react libraries
import React, { Component } from 'react';

// styles
import 'components/Loader/Loader.scss';
import 'components/Footer/Footer.scss';
import './Articles.scss';

// third party libraries
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// thunks (action creators)
import Navbar from 'components/NavBar';
import Search from 'components/Search';
import TagslistSmall from 'components/TagsList';
import Footer from 'components/Footer';
import { getAllMyAricles } from 'store/actions/articleActions';
import { defaultImgURL, formatDate } from 'utils';

class Articles extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { getMyAricles } = this.props;
    getMyAricles();
  }

  fetchArticle = (e, articleSLug) => {
    e.preventDefault();
    // const { title, description, body } = this.state;
    sessionStorage.setItem('articleSlug', articleSLug);
  };

  render() {
    const { articles } = this.props;

    const articlesList = articles.map(article => (
      <div key={article.id} className="articleCard" align="left">
        <div className="articleTitle"><a href={`/article/${article.id}`}>{ article.title }</a></div>
        <img src={`${defaultImgURL}/images/banner.jpg`} className="articleImg" alt="aritcle image" />
        <div className="articleAuthor">
          <img className="avartarSmall" src={`${defaultImgURL}/images/avartar.jpg`} alt="author avartar" />
          <p><a href="/authors/">{ article.author }</a></p>
        </div>
        <div className="articleBody">{ article.body }</div>
        <div className="bodyLinks-row-1">
          <p className="bodyButton pushLeft"><a href={`/article/${article.id}`}><span>more</span></a></p>
          <p className="bodyLitText pushRight">
            <b>Dated: </b>
            {formatDate(article.updatedAt)}
          </p>
        </div>
        <div className="bodyLinks-row-2">
          <p className="bodyLitText pushLeft">
            <b>Average rating: </b>
            (4.6) (1000)
          </p>
          <p className="bodyLitText pushRight">
            <b>Read: </b>
            {article.time_to_read}
            mins
          </p>
        </div>
        <div className="bodyLinks-row-2">
          <p className="bodyLitText pushLeft">
            <b>Views: </b>
            {article.read_stats.views}
          </p>
          <p className="bodyLitText pushRight">
            <b>Comments: </b>
            12
          </p>
        </div>
        <div className="bodyLinks-row-2">
          <p className="bodyLitText pushLeft">
            <b>Likes: </b>
            {article.likeCount[0].likes}
          </p>
          <p className="bodyLitText pushRight">
            <b>Dislikes: </b>
            {article.likeCount[0].dislikes}
          </p>
        </div>
        {/* tagsList component here */}
        <TagslistSmall />
      </div>
    ));
    return (
      <div className="canvas">
        <div className="landing">
          <Navbar />
        </div>
        <div className="breadcrumbs" align="left">
          <ul>
            <li>
              <img src="http://localhost:8080/src/assets/images/breadcrumbs.png" alt="breadcrumbs" />
              /Articles
            </li>
          </ul>
        </div>
        {/* search component here */}
        <Search />
        <div align="center" className="articlesCanvas">
          <div className="articlesContainer">
            {articlesList}
          </div>
        </div>
        <Footer />
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

const mapStateToProps = state => state.articlesReducer;

const mapDispatchToProps = dispatch => bindActionCreators({
  getMyAricles: getAllMyAricles,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
