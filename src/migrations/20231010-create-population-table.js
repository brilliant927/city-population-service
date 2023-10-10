module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Populations', {
            id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
            city: { allowNull: false, type: Sequelize.STRING },
            state: { allowNull: false, type: Sequelize.STRING },
            population: { allowNull: false, type: Sequelize.INTEGER },
            createdAt: { allowNull: false, type: Sequelize.DATE },
            updatedAt: { allowNull: false, type: Sequelize.DATE }
        });

        // Adding indexes on `state` and `city` for faster query performance.
        await queryInterface.addIndex('Populations', ['state']);
        await queryInterface.addIndex('Populations', ['city']);
        // Or if you want a composite index:
        // await queryInterface.addIndex('Populations', ['state', 'city']);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Populations');
    }
};