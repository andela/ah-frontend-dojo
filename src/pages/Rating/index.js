/* eslint-disable react/button-has-type */
// react libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ToastContainer } from 'react-toastify';
// third-party libraries
import StarRatingComponent from 'react-star-rating-component';

// action creator
import { starRatingActionCreator, getAverageRating } from 'store/actions/ratingActions';

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
    const { match } = this.props;
    if (match) {
      const { params: { slug } } = match;
      const { rating } = this.state;
      const { starRating, getAverage } = this.props;
      starRating(rating, slug);
      getAverage(slug);
    }
  };

  render() {
    const { rating } = this.state;

    return (
      <div>
        <h2>
          Rating from state:
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
  starRating: PropTypes.func.isRequired,
  getAverage: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    })
  }).isRequired,
};

export const mapStateToProps = state => ({ rating: state.rating });

const mapDispatchToProps = dispatch => ({
  starRating: (rating, slug) => {
    dispatch(starRatingActionCreator(rating, slug));
  },
  getAverageRating: (slug) => {
    dispatch(getAverageRating(slug));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(ArticleRating);
