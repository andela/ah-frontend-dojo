// react libraries
import React, { Component } from 'react';

// styles

export default class Search extends Component {
  render() {
    return (
      <div className="searchPanel">
        <div className="filterPanel">
          <p className="filerHeader"><b>FILTERS:</b></p>
          <p className="filterLinks">
            |
            <a href="/articles/">My Articles</a>
            |
            <a href="/articles/">Todays Articles</a>
            |
            <a href="/articles/">Most Popular</a>
            |
            <a href="/articles/">Most Liked</a>
            |
            <a href="/articles/">Trending</a>
            |git
          </p>
        </div>
        <form>
          <input type="text" className="search-bar" />
          <button type="submit" className="search-bar">SEARCH</button>
        </form>
      </div>
    );
  }
}
