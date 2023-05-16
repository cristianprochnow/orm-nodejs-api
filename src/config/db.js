import { Sequelize } from 'sequelize';

import { DB_DIALECT, DB_PATH } from './const.js';

const connection = new Sequelize({
  dialect: DB_DIALECT,
  storage: DB_PATH
});

export default connection;