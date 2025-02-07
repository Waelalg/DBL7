module.exports = (sequelize, DataTypes) => {
    const Inventory = sequelize.define('Inventory', {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      productId: DataTypes.INTEGER,
      location: DataTypes.STRING,
      currentStock: DataTypes.INTEGER,
      safetyStock: DataTypes.INTEGER,
      reorderPoint: DataTypes.INTEGER,
      lastUpdated: DataTypes.DATE,
    });
    Inventory.associate = models => {
      Inventory.belongsTo(models.Product, { foreignKey: 'productId' });
    };
    return Inventory;
  };
  