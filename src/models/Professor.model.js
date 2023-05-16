import Sequelize from 'sequelize';

import connection from '../config/db.js';

const Professor = connection.define('Professor', {
  COD_PROFESSOR: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  NOME: Sequelize.STRING(100),
  CPF: Sequelize.STRING(20),
  DATA_NASCIMENTO: Sequelize.DATE
});

export default Professor;