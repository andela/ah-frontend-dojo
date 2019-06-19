import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import { Bookmarks, mapDispatchToProps, mapStateToProps } from '.';


const mockStore = configureStore();

const initialState = {
  dispatchToggleBookmarks: () => { },
  bookmarkReducer: {
    isBookmarked: false,
    bookmarks: [],
  }
};

const store = mockStore(initialState);

describe('Password Reset Component', () => {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <Bookmarks />
      </MemoryRouter>
    </Provider>
  );

  const event = {
    preventDefault: jest.fn(),
  };

  it('should render without exploding', () => {
    const shallowWrapper = shallow(<Bookmarks />);
    expect(shallowWrapper.length).toBe(1);
  });

  it('should handle click when the article not bookmarked', () => {
    const component = shallow(<Bookmarks />);
    component.setProps({ isBookmarked: false });
    const bookmarkLink = component.find('.bookmarks__notBookmarked');

    bookmarkLink.simulate('click', event);
  });

  it('should handle click when the article is bookmarked', () => {
    const component = shallow(<Bookmarks />);
    component.setProps({ isBookmarked: true });
    const bookmarkLink = component.find('.bookmarks__isBookmarked');

    bookmarkLink.simulate('click', event);
  });

  it('should map state to props', () => {
    const mockedState = {
      bookmarkReducer: {
        isBookmarked: true,
      },
    };

    const state = mapStateToProps(mockedState);
    expect(state.isBookmarked).toBe(true);
  });

  it('should map dispatch to props', () => {
    const mockedDispatch = jest.fn();

    mapDispatchToProps(mockedDispatch).dispatchToggleBookmarks();
    mapDispatchToProps(mockedDispatch).getInitialBookmarkValue();
    expect(mockedDispatch).toHaveBeenCalled();
  });
});
