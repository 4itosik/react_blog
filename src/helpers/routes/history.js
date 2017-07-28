import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';

export default __CLIENT__ && __CLIENT__ == true ? createBrowserHistory() : createMemoryHistory();
