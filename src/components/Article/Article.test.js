import React from 'react';
import { shallow } from 'enzyme';
import { Article, mapStateToProps, mapDispatchToProps } from 'components/Article/';

// test to check if the Article component matches the snapshot
describe('Article Component', () => {
  const props = {
    createArticle: jest.fn(),
  };
  const component = shallow(<Article {...props} />);
  component.setState({
    title: '',
    description: '',
    body: '',
    tagList: [],
  });

  it('matches the snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should update title state on input change', () => {
    component.find('input[name="title"]').simulate(
      'change',
      {
        target: { name: 'title', value: 'article title' }
      }
    );

    expect(component.state('title')).toEqual('article title');
  });

  it('should update description state on input change', () => {
    component.find('input[name="description"]').simulate(
      'change',
      {
        target: { name: 'description', value: 'article description' }
      }
    );

    expect(component.state('description')).toEqual('article description');
  });

  it('should update body state on input change', () => {
    component.find('textarea[name="body"]').simulate(
      'change',
      {
        target: { name: 'body', value: 'article body' }
      }
    );

    expect(component.state('body')).toEqual('article body');
  });

  it('should handle input change event', () => {
    const event = {
      target: {
        name: 'title',
        value: 'new article title',
      },
    };
    component.instance().handleChange(event);
    expect(component.instance().state.title).toBe('new article title');
  });

  it('should handle submit event', () => {
    const article = {
      title: 'title text',
      description: 'description text',
      body: 'body text',
    };
    component.setState(article);
    const event = {
      target: {
        type: 'submit',
        name: 'createArtile',
      },
      preventDefault: jest.fn(),
    };
    component.instance().handleSubmit(event);
    expect(props.createArticle).toBeCalled();
    article.tagList = [];
    expect(props.createArticle).toBeCalledWith({ article });
  });

  it('should map state to props', () => {
    const article = {
      title: 'title text',
      description: 'description text',
      body: 'body text',
      target: [],
    };

    const mockedState = {
      articleReducer: { article }
    };

    const state = mapStateToProps((mockedState));
    expect(state.article.title).toBe('title text');
  });

  it('should map dispatch to props', () => {
    const mockDispatch = jest.fn();

    mapDispatchToProps((mockDispatch)).createArticle();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
