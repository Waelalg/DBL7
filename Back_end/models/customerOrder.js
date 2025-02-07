module.exports = (sequelize, DataTypes) => {
    const CustomerOrder = sequelize.define('CustomerOrder', {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      customerId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      orderDate: DataTypes.DATE,
      dueDate: DataTypes.DATE,
      status: DataTypes.STRING, // e.g., "New", "Processing", "Fulfilled"
    });
    CustomerOrder.associate = models => {
      CustomerOrder.belongsTo(models.Product, { foreignKey: 'productId' });
    };
    return CustomerOrder;
  };
  