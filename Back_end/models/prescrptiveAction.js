module.exports = (sequelize, DataTypes) => {
    const PrescriptiveAction = sequelize.define('PrescriptiveAction', {
      actionId: { 
        type: DataTypes.STRING, 
        primaryKey: true 
      },
      type: DataTypes.STRING,
      cost: DataTypes.DOUBLE,
      benefit: DataTypes.DOUBLE,
    });
    return PrescriptiveAction;
  };
  