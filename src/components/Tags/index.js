import React, { Component } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  COMMA: 188,
  ENTER: 13,
  TAB: 9,
};

const delimiters = [KeyCodes.COMMA, KeyCodes.ENTER, KeyCodes.TAB];

export class TagsComponent extends Component {
  state = {
    tagList: []
  };

  handleAddTag = (tag) => {
    this.setState(state => ({ tagList: [...state.tagList, tag] }));
  };

  handleDeleteTag = (i) => {
    const { tagList } = this.state;
    this.setState({ tagList: tagList.filter((tag, index) => index !== i) });
  };

  handleDragTag(tag, currPos, newPos) {
    const tags = [...TagsComponent.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }

  render() {
    const {
      handleAddTag, handleDragTag, handleDeleteTag, tags
    } = this.state;
    return (
      <div>
        <ReactTags
          tags={tags}
          classNames="tags"
          maxLength="100"
          delimiters={delimiters}
          handleAddition={handleAddTag}
          handleDelete={handleDeleteTag}
          handleDrag={handleDragTag}
        />
      </div>
    );
  }
}
export default TagsComponent;
