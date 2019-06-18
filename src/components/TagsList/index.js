// react libraries
import React, { Component } from 'react';

// third-party libraries
// import IosPricetagOutline from 'react-ionicons/lib/IosPricetagOutline';

// styles
import './tags.scss';

export default class Tagslist extends Component {
  render() {
    return (
      <div className="tagsListSmall">
        <b>
          {/* <IosPricetagOutline id="iconSmall" /> */}
          Tags:
        </b>
        <button type="submit">Default</button>
        <button type="submit" className="pythonTag">Python</button>
        <button type="submit" className="javascriptTag">JavaScript</button>
        <button type="submit" className="djangoTag">Django 2.1</button>
        <button type="submit" className="reactTag">React</button>
        <button type="submit" className="reduxTag">Redux</button>
      </div>
    );
  }
}
