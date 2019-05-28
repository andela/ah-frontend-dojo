import React from 'react';
import renderer from 'react-test-renderer'
import App from './App';

//test to check if the App component matches the snapshot
describe('App Component', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
