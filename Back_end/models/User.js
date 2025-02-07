// models/User.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      username: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true 
      },
      email: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true 
      },
      password: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      roleid: {  
        type: DataTypes.INTEGER, 
        allowNull: false 
      }
      // We let timestamps be handled automatically since timestamps: true is set.
    }, {
      tableName: 'users',
      timestamps: true,
    });
  
    User.associate = models => {
      User.belongsTo(models.Role, { foreignKey: 'roleid' });
      // If you have additional associations, add them here.
    };
  
    return User;
  };
  