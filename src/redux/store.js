import { createStore } from 'redux';
import rootReducer from './redux/reducer';

// Create the Redux store with the combined reducer
const store = createStore(rootReducer);

export default store;
