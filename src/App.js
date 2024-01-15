import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
        <h1 style={{ color: 'blue' }}>ToDo Application</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
