import app from './app.js';
import { PORT } from './config/const.js';
import connection from './config/db.js';
import { error, log } from './utils/log.js';

connection
  .sync()
  .then(run)
  .catch(fail);

function run() {
  log(`server is running at ${PORT}`);

  app.listen(PORT);
}

function fail() {
  error('server failure at init...');
}