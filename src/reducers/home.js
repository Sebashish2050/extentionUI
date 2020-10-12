import {
  CREATE_WIDGET,
  UPDATE_WIDGET,
  DELETE_WIDGET,
  UPDATE_LAYOUT,
} from '../actions/simpleAction';

const initialState = {
  widgets: [
    {
      id: 'a',
      type: 'countdown',
      props: {
        date: '2019-05-22T23:30:00.000Z',
      },
      result: {
        remaining: 3653,
      },
      isComputing: false,
      updatedAt: '2019-04-25T07:23:24.303Z',
      error: null,
    },
    // {
    //   id: 'b',
    //   type: 'countdown',
    //   props: {
    //     date: '2019-04-30T18:30:00.000Z',
    //   },
    //   result: {
    //     quote:
    //       'Given equal founder skill, e-commerce and mobile apps succeed much more frequently than SaaS startups do.',
    //     byline: 'Julian Shapiro of Bell Curve',
    //     url:
    //       'https://www.indiehackers.com/podcast/079-julian-shapiro-of-bell-curve',
    //   },
    //   isComputing: false,
    //   updatedAt: '2019-04-25T07:23:36.870Z',
    //   error: null,
    // },
    {
      id: 'c',
      type: 'indiehacker',
      props: {
        date: '2019-04-30T18:30:00.000Z',
      },
      result: {
        quote:
          'Given equal founder skill, e-commerce and mobile apps succeed much more frequently than SaaS startups do.',
        byline: 'Julian Shapiro of Bell Curve',
        url:
          'https://www.indiehackers.com/podcast/079-julian-shapiro-of-bell-curve',
      },
      isComputing: false,
      updatedAt: '2019-04-25T07:23:36.870Z',
      error: null,
    },
  ],
  tempWidget: null,
  layout: [
    {
      i: 'a',
      x: 0,
      y: 0,
      w: 3,
      h: 3,
      minW: 3,
      maxW: 3,
      minH: 3,
      maxH: 3,
      moved: false,
      static: false,
    },
    // {
    //   i: 'b',
    //   x: 3,
    //   y: 0,
    //   w: 3,
    //   h: 3,
    //   minW: 3,
    //   maxW: 3,
    //   minH: 3,
    //   maxH: 3,
    //   moved: false,
    //   static: false,
    // },
    {
      i: 'c',
      x: 0,
      y: 0,
      w: 9,
      h: 3,
      minW: 9,
      maxW: 9,
      minH: 3,
      maxH: 3,
      moved: false,
      static: false,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WIDGET:
      let widgetId = Math.random().toString();
      let newLayoutItem = {
        i: widgetId,
        x: 0,
        y: 0,
        w: 3,
        h: 3,
        moved: false,
        static: false,
        ...action.layout,
      };
      return {
        ...state,
        widgets: state.widgets.concat([
          Object.assign(
            {
              id: widgetId,
              result: {},
              isComputing: false,
              updatedAt: '2000-04-25T07:23:24.303Z',
              error: null,
            },
            action.widget
          ),
        ]),
        layout: state.layout.concat([newLayoutItem]),
      };
    case UPDATE_WIDGET:
      const widgetsOld = state.widgets;
      let widgets = widgetsOld.map(widget => {
        if (widget.id === action.widget.id) {
          widget = action.widget;
        }
        return widget;
      });
      return {
        ...state,
        widgets: widgets,
      };
    case DELETE_WIDGET:
      widgets = state.widgets.filter(function(widget) {
        return widget.id !== action.widget.id;
      });
      return {
        ...state,
        widgets: widgets,
      };
    case 'MOVE_WIDGET':
    case UPDATE_LAYOUT:
      return {
        ...state,
        layout: action.layout,
      };
    default:
      return state;
  }
};
