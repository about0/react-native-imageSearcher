import { combineReducers } from 'redux';

import {
  FETCH_IMAGES_BEGIN,
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGES_SUCCESS,
} from '../actions/actions';

const initialState = {
  images: [],
  loading: false,
  error: null,
};

function search(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
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

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  search,
});

export default rootReducer;
