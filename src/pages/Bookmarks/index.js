// react
import React, { Component } from 'react';

// 3rd party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// styles
import './Bookmarks.scss';

// actions
import { toggleBookmark, setInitialBookmarkStatus } from 'store/actions/bookmarkActions';


export class Bookmarks extends Component {
  componentDidMount() {
    const { getInitialBookmarkValue } = this.props;
    getInitialBookmarkValue('building-world-class-features');
  }

  handleClick = (e) => {
    e.preventDefault();
    const { dispatchToggleBookmarks } = this.props;
    dispatchToggleBookmarks('building-world-class-features');
  }

  render() {
    const { isBookmarked } = this.props;

    return (
      <div className="bookmarks">
        <div className="bookmarks__header">
          <p className="bookmarks__header__title">Bookmarks</p>
        </div>
        {
          isBookmarked
            ? (
              <div
                onClick={this.handleClick}
                tabIndex="0"
                role="button"
                onKeyPress={this.handleKeyPress}
                className="bookmarks__isBookmarked"
              />
            )
            : (
              <div
                onClick={this.handleClick}
                tabIndex="0"
                role="button"
                onKeyPress={this.handleKeyPress}
                className="bookmarks__notBookmarked"
              />
            )
        }
      </div>
    );
  }
}

// prop type validation
Bookmarks.propTypes = {
  dispatchToggleBookmarks: PropTypes.func,
  getInitialBookmarkValue: PropTypes.func,
  isBookmarked: PropTypes.bool,
};

// default props
Bookmarks.defaultProps = {
  dispatchToggleBookmarks: () => { },
  getInitialBookmarkValue: () => { },
  isBookmarked: false,
};

export const mapStateToProps = ({
  dispatchToggleBookmarks,
  getInitialBookmarkValue,
  bookmarkReducer: {
    isBookmarked,
  },
}) => ({
  getInitialBookmarkValue,
  dispatchToggleBookmarks,
  isBookmarked,
});

export const mapDispatchToProps = dispatch => ({
  dispatchToggleBookmarks: slug => dispatch(toggleBookmark(slug)),
  getInitialBookmarkValue: slug => dispatch(setInitialBookmarkStatus(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);
