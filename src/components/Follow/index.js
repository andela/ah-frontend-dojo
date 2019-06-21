// React libraries
import React, { Component } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// components
import Button from 'components/Button';

// action creators
import {
  fellowAndUnfollowAuthorActionCreator,
} from 'store/actions/followActions';

export default class FollowProfileButton extends Component {
  followClick = () => {
    const { onButtonClick, username } = this.props;
    onButtonClick(fellowAndUnfollowAuthorActionCreator(username));
  }

  unfollowClick = () => {
    const { onButtonClick, username } = this.props;
    onButtonClick(fellowAndUnfollowAuthorActionCreator(username));
  }

  render() {
    const { following } = this.props;
    return (
      <div>
        { following
          ? (
            <Button
              variant="raised"
              color="secondary"
              btnClass="edit-btn"
              btnName="Unfollow"
              btnEvent={this.unfollowClick}
              onClick={this.unfollowClick}
            >
            Unfollow
            </Button>
          )
          : (
            <Button
              variant="raised"
              color="primary"
              btnClass="edit-btn"
              btnName="Follow"
              btnEvent={this.followClick}
              onClick={this.followClick}
            >
            Follow
            </Button>
          )
      }
      </div>
    );
  }
}

FollowProfileButton.propTypes = {
  username: PropTypes.string.isRequired,
  following: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired
};
