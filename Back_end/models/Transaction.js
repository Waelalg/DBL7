module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      transactionType: DataTypes.STRING,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.DECIMAL,
      transactionDate: DataTypes.DATE,
    });
    Transaction.associate = models => {
      Transaction.belongsTo(models.Product, { foreignKey: 'productId' });
    };
    return Transaction;
  };
  