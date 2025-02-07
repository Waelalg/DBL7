module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      sku: DataTypes.STRING,
      name: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      manufacturerId: DataTypes.INTEGER,
      unitPrice: DataTypes.DECIMAL,
      productionCost: DataTypes.DECIMAL,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
    Product.associate = models => {
      Product.belongsTo(models.Category, { foreignKey: 'categoryId' });
      Product.belongsTo(models.Manufacturer, { foreignKey: 'manufacturerId' });
      Product.hasMany(models.Inventory, { foreignKey: 'productId' });
      Product.hasMany(models.DemandForecast, { foreignKey: 'productId' });
      Product.hasMany(models.SupplyPlan, { foreignKey: 'productId' });
      Product.hasMany(models.CustomerOrder, { foreignKey: 'productId' });
      Product.hasMany(models.Distribution, { foreignKey: 'productId' });
      Product.belongsToMany(models.Component, { 
        through: models.BillOfMaterials, 
        foreignKey: 'productId', 
        otherKey: 'componentId' 
      });
    };
    return Product;
  };
  