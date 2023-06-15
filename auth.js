const axios = require('axios');

const authenticationEndpoint = 'http://104.211.219.98/train/auth';

axios.post(authenticationEndpoint, {
  // Include any required authentication parameters here
  // For example, username and password
  username: '789456',
  password: 'qwerty'
})
  .then(response => {
    const authenticationToken = response.data.token;
    // Store the authentication token for future use
    
    // Make subsequent API requests with the authentication token
    // Example:
    axios.get('http://104.211.219.98/train/schedule', {
      headers: {
        Authorization: `Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1eHAiOjE2ODI2MjkyNjQsImNvbXBhb1OYM11IjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudEIEIjoiYjQ2MTE4ZjAtZmJkZS00YjE2LWE0YjEtNmFkNzE8YjI3In0.v93QcxrZHWDTnTwm0-6ttoTGI4C65Grhn3r1JDC8fy8}`,
      },
    })
      .then(response => {
        // Process the response data
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
