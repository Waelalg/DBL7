module.exports = (sequelize, DataTypes) => {
    const WhatIfCase = sequelize.define('WhatIfCase', {
      caseId: { 
        type: DataTypes.STRING, 
        primaryKey: true 
      },
      description: DataTypes.STRING,
      assumptions: DataTypes.JSON,
      predictedOutcome: DataTypes.JSON,
      impactScore: DataTypes.DOUBLE,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
    return WhatIfCase;
  };
  