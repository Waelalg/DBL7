module.exports = (sequelize, DataTypes) => {
    const Supplier = sequelize.define('Supplier', {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      name: DataTypes.STRING,
      contactInfo: DataTypes.STRING,
      address: DataTypes.STRING,
      leadTime: DataTypes.INTEGER,
      reliabilityScore: DataTypes.DECIMAL,
      paymentTerms: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
    Supplier.associate = models => {
      Supplier.hasMany(models.SupplyPlan, { foreignKey: 'supplierId' });
      Supplier.hasMany(models.Component, { foreignKey: 'supplierId' });
    };
    return Supplier;
  };
  