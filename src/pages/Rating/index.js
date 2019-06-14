import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Rating } from 'semantic-ui-react';


export default class ArticleRating extends Component {
  render() {
    return (
      <div data-test="starRatingComponent">
        <Rating maxRating="5" size="massive" />
      </div>
    );
  }
}
