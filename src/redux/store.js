import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({ searchPhrase, cards }, columnId) => cards
  .filter(c => c.columnId === columnId && strContains(c.title, searchPhrase));

export const getAllColumns = ({ columns }) => columns;

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const updateSearchPhrase = payload => ({ type: 'UPDATE_SEARCHPHRASE', payload });

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, {...action.payload, id: shortid()}]}
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {...action.payload, id: shortid()}]}
    case 'UPDATE_SEARCHPHRASE':
      return {...state, searchPhrase: action.payload }
    default:
      return state;
    }
  };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;