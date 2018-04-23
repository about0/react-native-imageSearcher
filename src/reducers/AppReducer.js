import { combineReducers } from 'redux';

import {
  FETCH_IMAGES_BEGIN,
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGES_SUCCESS,
  KEYWORD_CHANGE,
} from '../actions/actions';

const initialState = {
  images: [],
  loading: false,
  error: null,
  keyword: '',
};

function search(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        keyword: action.payload.keyword,
      };

    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        images: action.payload.images,
      };

    case FETCH_IMAGES_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        images: [],
      };

    case KEYWORD_CHANGE:
      return {
        ...state,
        keyword: action.payload.keyword,
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  search,
});

export default rootReducer;
