import axios from 'axios';

const fetchMetrics = params => {
  console.log('Params is: ', params);
  return new Promise(function(t) {
    axios({
      method: 'GET',
      url:`https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en`
    }).then(response => {
      console.log(response);
      t(response.data);
    });
  });
};
export default fetchMetrics;
