import axios from 'axios';

export const FETCH_IMAGES_BEGIN = 'FETCH_IMAGES_BEGIN';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE';
export const KEYWORD_CHANGE = 'KEYWORD_CHANGE';

const request = axios.create({
  baseURL: 'https://api.cognitive.microsoft.com/bing/v7.0/images/',
  headers: { 'Ocp-Apim-Subscription-Key': '922e5ea795014f5e8ad356c041518887' },
});

export const fetchImagesBegin = (keyword) => {
  return {
    type: FETCH_IMAGES_BEGIN,
    payload: { keyword },
  };
};

export const fetchImagesSuccess = images => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: { images },
});

export const fetchImagesFailure = error => ({
  type: FETCH_IMAGES_FAILURE,
  payload: { error },
});

export function fetchImages(keyword) {
  return (dispatch) => {
    dispatch(fetchImagesBegin(keyword));
    return request
      .get(`search?q=${keyword}&responseFilter=Images`)
      .then((res) => {
        const result = res.data.value;
        dispatch(fetchImagesSuccess(result));
        return result;
      })
      .catch(error => dispatch(fetchImagesFailure(error)));
  };
}

export function onKeywordChange(keyword) {
  fetchImages(keyword);
  return { type: KEYWORD_CHANGE, payload: { keyword } };
}
