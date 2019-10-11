import {fetchImages} from '../../routines';
const initialState = {loading: false, images: []};

export default (state = initialState, action) => {
  switch (action.type) {
    case fetchImages.TRIGGER:
      return {
        ...state,
        loading: true,
      };
    case fetchImages.SUCCESS:
      return {
        ...state,
        images: action.payload,
      };
    case fetchImages.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case fetchImages.FULFILL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
