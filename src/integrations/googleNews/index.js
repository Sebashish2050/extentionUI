import widget from './widget';
import setupWidget from './setupWidget';
import fetchMetrics from './fetchMetrics';

export default {
  meta: {
    provider: 'googlenews',
    name: 'Top Stories from Google',
    auth: [],
    description: 'Top news stories from Google News, per country',
    layout: {},
  },
  widget: widget,
  setupWidget: setupWidget,
  fetchMetrics: fetchMetrics,
};
