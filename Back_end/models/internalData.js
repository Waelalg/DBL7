module.exports = (sequelize, DataTypes) => {
    const InternalData = sequelize.define('InternalData', {
      dataId: { 
        type: DataTypes.STRING, 
        primaryKey: true 
      },
      fileName: DataTypes.STRING,
      fileType: DataTypes.STRING,
      fileContent: DataTypes.TEXT,
    });
    return InternalData;
  };
  