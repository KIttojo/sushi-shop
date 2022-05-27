import { createStore, combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { cardReducer } from './cardReducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  card: cardReducer,
  user: userReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());
