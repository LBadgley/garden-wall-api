/* eslint-disable no-console */
require('dotenv').config();
require('./lib/utils/connect');
// const bodyParser = require('body-parser');

const app =  require('./lib/app');
const PORT = 7890;

app.listen(7890, () => {
  console.log('Server is listening on PORT' `${PORT}`);
});

