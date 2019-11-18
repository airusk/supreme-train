import { combineReducers } from 'redux';
import errors_reducer from './errors_reducer';
import session from './session_reducer';
import tweets_reducer from './tweets_reducer';

const RootReducer = combineReducers({
  session,
  errors: errors_reducer,
  tweets: tweets_reducer
});

export default RootReducer;