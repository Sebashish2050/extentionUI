import moment from 'moment';

const fetchMetrics = e => {
  return new Promise(function(t) {
    if (!e || !e.props.date) return t();
    t({
      date: moment(e.props.date).format('MMM D YYYY, h:mm a'),
      diff: moment(e.props.date).from(moment()),
    });
  });
};
export default fetchMetrics;
