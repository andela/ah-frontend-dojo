import React from 'react';
import { shallow } from 'enzyme';
import { Article } from 'components/Article/';

// test to check if the Article component matches the snapshot
describe('Article Component', () => {
  const props = {
    createArticle: jest.fn(),
  };
  const component = shallow(<Article {...props} />);
  it('matches the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
