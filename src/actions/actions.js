import axios from 'axios';

export const FETCH_IMAGES_BEGIN = 'FETCH_IMAGES_BEGIN';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE';

const request = axios.create({
  baseURL: 'https://api.cognitive.microsoft.com/bing/v7.0/images/search',
  headers: [
    { 'Ocp-Apim-Subscription-Key': '922e5ea795014f5e8ad356c041518887' },
  ],
});

export const fetchImagesBegin = () => {
  return {
    type: FETCH_IMAGES_BEGIN,
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

export function fetchImages() {
  return (dispatch) => {
    dispatch(fetchImagesBegin());
    return request
      .get('?q=malaka')
      .then(res => res.json())
      .then((json) => {
        dispatch(fetchImagesSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchImagesFailure(error)));
  };
}
