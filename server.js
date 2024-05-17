// server.js
const express = require('express');
const ytdl = require('ytdl-core');

const app = express();
const port = process.env.PORT || 3000;

app.get('/download', (req, res) => {
  const videoUrl = req.query.url;
  if (videoUrl) {
    const stream = ytdl(videoUrl);
    res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');
    stream.pipe(res);
  } else {
    res.status(400).send('Invalid video URL');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
