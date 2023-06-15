const axios = require('axios');

const trainsEndpoint = 'http://104.211.219.98/train/trains';

axios.get(trainsEndpoint)
  .then(response => {
    // Process the response data
    const trainData = response.data;
    console.log(trainData);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
