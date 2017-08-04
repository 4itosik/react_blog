import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createMemoryHistory from 'history/createMemoryHistory';

import BlogItem from 'components/views/BlogItem';
import TextBox from 'components/ui/TextBox';

import configureMockStore from 'redux-mock-store';

const history = createMemoryHistory();
const mockStore = configureMockStore();

describe('Render BlogItem', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render( // Эт нормальный подход? (по другому тест не проходит)
      <Provider store={mockStore()}>
        <ConnectedRouter history={history}><BlogItem /></ConnectedRouter>
      </Provider>,
      div
    );
  });

  describe('Render', () => {
    it('should render the title', () => {
      const postProps = { title: 'Hello Word', id: 5, meta: {} };

      const post = shallow(<BlogItem post={postProps} />);
      const header = <TextBox>Hello Word</TextBox>;

      expect(post.contains(header)).toEqual(true);
    });
  });
});
