import React from 'react';

import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import store from 'store/store';

import { LandingPage } from 'pages/Landing';
import App from './App';

describe('routes using memory router', () => {
  it('should show Home component for / router (using memory router)', () => {
    const component = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    expect(component.find(LandingPage)).toHaveLength(1);
  });
});
