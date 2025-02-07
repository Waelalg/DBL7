module.exports = (sequelize, DataTypes) => {
    const DemandForecast = sequelize.define('DemandForecast', {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      productId: DataTypes.INTEGER,
      region: DataTypes.STRING,
      periodStart: DataTypes.DATE,
      periodEnd: DataTypes.DATE,
      baseQuantity: DataTypes.INTEGER,
      adjustedQuantity: DataTypes.INTEGER,
      confidenceLevel: DataTypes.DECIMAL,
      createdAt: DataTypes.DATE,
    });
    DemandForecast.associate = models => {
      DemandForecast.belongsTo(models.Product, { foreignKey: 'productId' });
    };
    return DemandForecast;
  };
  