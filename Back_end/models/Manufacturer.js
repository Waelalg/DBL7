module.exports = (sequelize, DataTypes) => {
    const Manufacturer = sequelize.define('Manufacturer', {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      name: DataTypes.STRING,
      contactInfo: DataTypes.STRING,
      address: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
    Manufacturer.associate = models => {
      Manufacturer.hasMany(models.Product, { foreignKey: 'manufacturerId' });
    };
    return Manufacturer;
  };
  