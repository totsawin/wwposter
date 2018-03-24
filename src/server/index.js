const express = require('express');
const app = express();
const port = process.env.POST || 3000;
const publicweb = process.env.PUBLICWEB || './publicweb';

app.use(express.static(publicweb));
console.log(`serving ${publicweb}`);

app.get('*', (req, res) => {
    res.sendFile(`index.html`, { root: publicweb });
  });

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`listening on http://localhost:${port}`)
})