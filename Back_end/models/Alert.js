// models/Alert.js
module.exports = (sequelize, DataTypes) => {
    const Alert = sequelize.define('Alert', {
      alertId: { 
        type: DataTypes.STRING, 
        primaryKey: true 
      },
      severity: DataTypes.STRING,
      message: DataTypes.STRING,
      timestamp: DataTypes.DATE,
      userId: DataTypes.INTEGER,  // foreign key to User
    });
  
    // Define associations
    Alert.associate = models => {
      // Ensure that models.User is a valid Sequelize model.
      Alert.belongsTo(models.User, { foreignKey: 'userId' });
    };
  
    return Alert;
  };
  