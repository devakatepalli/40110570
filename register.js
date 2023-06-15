const axios = require('axios');

const registrationEndpoint = 'http://104.211.219.98/train/register';

axios.post(registrationEndpoint, {
  rollNumber: '789456',
})
  .then(response => {
    // Process the response data
    console.log('Registration successful');
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
