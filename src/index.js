const app = require('./server');

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Server on http://localhost:${app.get('port')}`);
});
