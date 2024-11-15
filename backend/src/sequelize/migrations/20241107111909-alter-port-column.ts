import { QueryInterface, Sequelize } from 'sequelize';

export = {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    await queryInterface.sequelize.query(`
      ALTER TABLE "devices"
      ALTER COLUMN "port" TYPE INTEGER USING "port"::INTEGER,
      ALTER COLUMN "dashboardPort" TYPE INTEGER USING "dashboardPort"::INTEGER;
    `);
  },

  down: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    await queryInterface.sequelize.query(`
      ALTER TABLE "devices"
      ALTER COLUMN "port" TYPE VARCHAR,
      ALTER COLUMN "dashboardPort" TYPE VARCHAR;
    `);
  }
};
