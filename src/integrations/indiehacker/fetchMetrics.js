import axios from 'axios';

const fetchMetrics = e => {
  return new Promise(function(t) {
    axios({
      method: 'GET',
      url:
        'https://indie-hackers.firebaseio.com/loadingQuotes/' +
        Math.floor(Math.random() * 10) +
        '.json',
    }).then(response => {
      console.log(response);
      t(response.data);
    });
  });
};
export default fetchMetrics;
