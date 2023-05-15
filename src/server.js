import app from './app.js';
import { PORT } from './config/const.js';

app.listen(PORT, function() {
  console.log('[server] > server started...');
});