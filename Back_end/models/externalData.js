module.exports = (sequelize, DataTypes) => {
    const ExternalData = sequelize.define('ExternalData', {
      externalDataId: { 
        type: DataTypes.STRING, 
        primaryKey: true 
      },
      sourceType: DataTypes.STRING,
      rawData: DataTypes.JSON,
      processedData: DataTypes.JSON,
    });
    return ExternalData;
  };
  