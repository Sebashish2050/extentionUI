import integrations from '../integrations/index';

export const CREATE_WIDGET = 'CREATE_WIDGET';
export const UPDATE_WIDGET = 'UPDATE_WIDGET';
export const DELETE_WIDGET = 'DELETE_WIDGET';
export const UPDATE_LAYOUT = 'UPDATE_LAYOUT';
export const UPDATE_PREVIEW_WIDGET = 'UPDATE_PREVIEW_WIDGET';
export const CLEAR_PREVIEW_WIDGET = 'CLEAR_PREVIEW_WIDGET';

export const createWidget = (newWidget, layout) => dispatch => {
  dispatch({
    type: CREATE_WIDGET,
    widget: newWidget,
    layout: layout || {},
  });
};

export const fetchWidgetData = widget => dispatch => {
  console.log('widget::: ', widget);
  if (widget.isComputing) {
    return;
  }
  dispatch({
    type: UPDATE_WIDGET,
    widget: {
      ...widget,
      isComputing: true,
    },
  });
  integrations[widget.type].fetchMetrics(widget).then(result => {
    dispatch({
      type: UPDATE_WIDGET,
      widget: {
        ...widget,
        isComputing: false,
        result: result,
        updatedAt: new Date(),
        error: null,
      },
    });
  });
};

export const deleteWidget = widget => dispatch => {
  dispatch({
    type: DELETE_WIDGET,
    widget: widget,
  });
};

export const updateLayout = layout => dispatch => {
  dispatch({
    type: UPDATE_LAYOUT,
    layout: layout,
  });
};

export const updatePreviewWidget = widget => dispatch => {
  dispatch({
    type: UPDATE_PREVIEW_WIDGET,
    widget: widget,
  });
};

export const clearPreviewWidget = () => dispatch => {
  dispatch({
    type: CLEAR_PREVIEW_WIDGET,
  });
};
