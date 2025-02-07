module.exports = (sequelize, DataTypes) => {
    const Distribution = sequelize.define('Distribution', {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      productId: DataTypes.INTEGER,
      channel: DataTypes.STRING,
      region: DataTypes.STRING,
      distributionDate: DataTypes.DATE,
      quantity: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
    Distribution.associate = models => {
      Distribution.belongsTo(models.Product, { foreignKey: 'productId' });
    };
    return Distribution;
  };
  