module.exports = (sequelize, DataTypes) => {
    const FinancialRecord = sequelize.define('FinancialRecord', {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      recordType: DataTypes.STRING,
      amount: DataTypes.DECIMAL,
      recordDate: DataTypes.DATE,
    });
    return FinancialRecord;
  };
  