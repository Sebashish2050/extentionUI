import widget from './widget';
import fetchMetrics from './fetchMetrics';
import setupWidget from  './setupWidget';

export default {
  meta: {
    provider: 'indiehacker',
    name: 'Indie Hacker Quotes',
    description: 'Fresh quote from IndieHackers',
    auth: [],
  },
  widget: widget,
  fetchMetrics: fetchMetrics,
  setupWidget: setupWidget,
};
