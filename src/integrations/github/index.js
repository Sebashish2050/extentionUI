import widget from './widget';

export default {
  meta: {
    provider: 'github',
    name: 'Github Notifications',
    auth: ['github'],
    description: 'Unread Github notifications',
  },
  widget: widget,
};
