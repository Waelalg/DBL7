module.exports = (sequelize, DataTypes) => {
    const IoTDevice = sequelize.define('IoTDevice', {
      deviceId: { 
        type: DataTypes.STRING, 
        primaryKey: true 
      },
      type: DataTypes.STRING,
      status: DataTypes.STRING,
    });
    return IoTDevice;
  };
  