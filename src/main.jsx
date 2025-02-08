import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { bindActionCreators, createStore } from 'redux';
import * as actions from './actions';
import reducer from './reducer';

const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;

const update = () => {
  document.getElementById('counter').textContent = getState().value;
};

subscribe(update);

const { dec, inc, rnd } = bindActionCreators(actions, dispatch);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('rnd').addEventListener('click', function () {
  const value = Math.floor(Math.random() * 10);
  rnd(value);
});

createRoot(document.getElementById('root')).render(<StrictMode></StrictMode>);
