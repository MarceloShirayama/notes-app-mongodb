require('dotenv').config();
const app = require('./server');
require('./database');

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Server on http://localhost:${app.get('port')}`);
});
