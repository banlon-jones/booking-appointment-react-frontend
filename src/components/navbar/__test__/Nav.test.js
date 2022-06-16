import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Nav from '../Nav';

describe('snapshots', () => {
  const initialState = { user: { loggedIn: false, role: '' } };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('matches LogIn snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Nav />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
