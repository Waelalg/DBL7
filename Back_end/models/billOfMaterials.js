module.exports = (sequelize, DataTypes) => {
    const BillOfMaterials = sequelize.define('BillOfMaterials', {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      productId: DataTypes.INTEGER,
      componentId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
    return BillOfMaterials;
  };
  