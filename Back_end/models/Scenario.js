module.exports = (sequelize, DataTypes) => {
    const Scenario = sequelize.define('Scenario', {
      scenarioId: { 
        type: DataTypes.STRING, 
        primaryKey: true 
      },
      description: DataTypes.STRING,
      impactScore: DataTypes.DOUBLE,
    });
    return Scenario;
  };
  