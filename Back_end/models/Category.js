module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
    Category.associate = models => {
      Category.hasMany(models.Product, { foreignKey: 'categoryId' });
    };
    return Category;
  };
  