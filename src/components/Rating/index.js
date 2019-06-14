/* eslint-disable react/button-has-type */
// react libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// third-party libraries
import StarRatingComponent from 'react-star-rating-component';
import { ToastContainer } from 'react-toastify';

// action creator
import { starRatingActionCreator, getArticleRatingAvarege } from 'store/actions/ratingActions';

class ArticleRating extends Component {
  constructor() {
    super();

    this.state = {
      rating: 0
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  onSubmit = () => {
    // eslint-disable-next-line react/prop-types
    const { match } = this.props;
    if (match) {
      const { params: { slug } } = match;
      const { rating } = this.state;
      // eslint-disable-next-line react/destructuring-assignment
      this.props.starRatingActionCreator(rating, slug);
    }
  };

  render() {
    const { rating } = this.state;

    return (
      <div>
        <h2>
          Rating:
          {' '}
          {rating}
        </h2>
        <ToastContainer autoClose={4000} />
        <StarRatingComponent
          name="rate"
          starCount={5}
          value={rating}
          // eslint-disable-next-line react/jsx-no-bind
          onStarClick={this.onStarClick.bind(this)}
        />
        <div className="modal-footer">
          <button className="submitButton">
            <a href="#!" className="btn-flat" onClick={this.onSubmit}>
             SUBMIT
            </a>
            {' '}
          </button>
        </div>
      </div>
    );
  }
}

ArticleRating.propTypes = {
  starRatingActionCreator: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({ rating: state.rating });
export default connect(mapStateToProps, { starRatingActionCreator })(ArticleRating);
