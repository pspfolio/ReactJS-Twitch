import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import itemsByTwitch from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore)

export default function configureStore(initialState) {
  return createStoreWithMiddleware(itemsByTwitch, initialState);
}
