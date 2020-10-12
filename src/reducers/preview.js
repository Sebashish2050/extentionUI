import {
  UPDATE_PREVIEW_WIDGET,
  CLEAR_PREVIEW_WIDGET,
} from '../actions/simpleAction';

const initialState = {
  previewWidget: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PREVIEW_WIDGET:
      return {
        previewWidget: action.widget,
      };
    case CLEAR_PREVIEW_WIDGET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
