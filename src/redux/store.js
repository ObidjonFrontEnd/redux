import { createStore } from 'redux';
import { lightReducer, nameReducer } from './reducer';

export const store = createStore(nameReducer);
export const light = createStore(lightReducer);