module.exports = (sequelize, DataTypes) => {
    const Component = sequelize.define('Component', {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      cost: DataTypes.DECIMAL,
      supplierId: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
    Component.associate = models => {
      Component.belongsTo(models.Supplier, { foreignKey: 'supplierId' });
      Component.belongsToMany(models.Product, { 
        through: models.BillOfMaterials, 
        foreignKey: 'componentId', 
        otherKey: 'productId' 
      });
    };
    return Component;
  };
  