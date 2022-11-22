import shortid from 'shortid';
import { strContains } from '../utils/strContains';

// selectors
export const getFilteredCards = ({ searchPhrase, cards }, columnId) => cards
  .filter(c => c.columnId === columnId && strContains(c.title, searchPhrase));
export const isFavorite = ({ cards }, cardId) => cards.find(c => c.id === cardId).isFavorite;
export const getAllFavoriteCards = ({ cards }) => cards.filter(c => c.isFavorite);

// actions
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const REMOVE_CARD = createActionName('REMOVE_CARD');

// action creators
export const addCard = payload => ({ type: ADD_CARD, payload });
export const addToFavorites = payload => ({ type: TOGGLE_CARD_FAVORITE, payload });
export const removeCard = payload => ({ type: REMOVE_CARD, payload });

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid(), isFavorite: false }];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    case REMOVE_CARD:
      return statePart.filter(card => card.id !== action.payload);
    default:
      return statePart;
  }
}

export default cardsReducer;
