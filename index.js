const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000; // You can change the port number if needed

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/trains', (req, res) => {
  const authenticationToken = '<siuzyt>'; // Replace with the actual authentication token you received

  axios.get('http://104.211.219.98/train/schedule', {
    headers: {
      Authorization: `Bearer ${siuzyt}`,
    },
  })
    .then(response => {
      const trainData = response.data;

      // Filter and sort the train data according to the requirements
      const filteredTrains = trainData.filter(train => {
        const departureTime = new Date(train.departureTime);
        const currentTime = new Date();
        const timeDifference = departureTime - currentTime;
        const minutesDifference = timeDifference / 1000 / 60;
        return minutesDifference > 30;
      });

      const sortedTrains = filteredTrains.sort((a, b) => {
        if (a.price !== b.price) {
          return a.price - b.price;
        } else if (a.availableTickets !== b.availableTickets) {
          return b.availableTickets - a.availableTickets;
        } else {
          return new Date(b.departureTime) - new Date(a.departureTime);
        }
      });

      // Return the filtered and sorted train data in the API response
      res.json(sortedTrains);
    })
    .catch(error => {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});
