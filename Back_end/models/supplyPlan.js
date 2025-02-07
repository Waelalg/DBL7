module.exports = (sequelize, DataTypes) => {
    const SupplyPlan = sequelize.define('SupplyPlan', {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      productId: DataTypes.INTEGER,
      supplierId: DataTypes.INTEGER,
      plannedQuantity: DataTypes.INTEGER,
      actualQuantity: DataTypes.INTEGER,
      status: DataTypes.STRING, // e.g., "Draft", "Approved", "Completed"
      deadline: DataTypes.DATE,
    });
    SupplyPlan.associate = models => {
      SupplyPlan.belongsTo(models.Product, { foreignKey: 'productId' });
      SupplyPlan.belongsTo(models.Supplier, { foreignKey: 'supplierId' });
    };
    return SupplyPlan;
  };
  