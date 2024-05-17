const express = require('express');
const ytdl = require('ytdl-core');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the YouTube Bulk Downloader!');
});

app.get('/download', async (req, res) => {
  const { urls } = req.query;

  if (!urls || !Array.isArray(urls)) {
    return res.status(400).send('Invalid or missing URLs parameter.');
  }

  try {
    const videoInfos = [];

    for (const url of urls) {
      const info = await ytdl.getInfo(url);
      videoInfos.push(info);
    }

    // Perform your desired actions with the videoInfos array
    // For example, you could download the videos or extract information

    res.json(videoInfos);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred while processing the request.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
