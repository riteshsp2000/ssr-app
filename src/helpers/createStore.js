import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));

  return store;
};
