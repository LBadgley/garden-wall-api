let express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('garden wall API server started on: ' + port);
