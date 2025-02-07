module.exports = (sequelize, DataTypes) => {
    const AIEngine = sequelize.define('AIEngine', {
      modelId: { 
        type: DataTypes.STRING, 
        primaryKey: true 
      },
      modelType: DataTypes.STRING,
      trainingData: DataTypes.JSON,  // Using JSON for training data array/object
    });
    return AIEngine;
  };
  