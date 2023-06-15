const axios = require('axios');

const trainNumber = 2344;
const trainEndpoint = `http://104.211.219.98/train/trains/${trainNumber}`;

axios.get(trainEndpoint)
  .then(response => {
    // Process the response data
    const trainData = response.data;
    console.log(trainData);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
