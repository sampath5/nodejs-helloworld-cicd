const express = require('express');

// Constants
const PORT = 8000;


// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Guys!!');
});

app.listen(PORT);
console.log(`Running on ${PORT}`);
module.exports=app;