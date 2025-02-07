module.exports = (sequelize, DataTypes) => {
    const Report = sequelize.define('Report', {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      reportName: DataTypes.STRING,
      data: DataTypes.STRING,
      generatedAt: DataTypes.DATE,
      userId: DataTypes.INTEGER, // To associate with User
    });
    Report.associate = models => {
      Report.belongsTo(models.User, { foreignKey: 'userId' });
    };
    return Report;
  };
  