const express = require('express');
const axios = require('axios');
const { createBadge } = require('./badge');

const app = express();
const LEETCODE_QUERY = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      userCalendar {
        streak
      }
    }
  }
`;

app.get('/streak', async (req, res) => {
  try {
    const { username } = req.query;
    
    if (!username) {
      return res.status(400).send('Username is required');
    }

    const response = await axios.post('https://leetcode.com/graphql', {
      query: LEETCODE_QUERY,
      variables: { username }
    });

    const streak = response.data.data?.matchedUser?.userCalendar?.streak || 0;
    const badge = createBadge(streak);
    
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(badge);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Error fetching LeetCode data');
  }
});

module.exports = app;