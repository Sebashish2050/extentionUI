import widget from './widget';
import setupWidget from './setupWidget';
import fetchMetrics from './fetchMetrics';

export default {
  meta: {
    provider: 'time',
    name: 'Countdown',
    description: 'Display a countdown until date and time',
    auth: [],
    layout: {},
  },
  widget: widget,
  setupWidget: setupWidget,
  fetchMetrics: fetchMetrics,
};
