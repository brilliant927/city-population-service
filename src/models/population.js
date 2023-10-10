const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Population extends Model { }
    Population.init({
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        population: DataTypes.INTEGER
    }, { sequelize, modelName: 'Population' });
    return Population;
};
