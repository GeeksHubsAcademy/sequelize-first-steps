'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    CategoryId: DataTypes.INTEGER,
    image_path: DataTypes.STRING
  }, {});
  Product.associate = function (models) {
    Product.belongsTo(models.Category);
    Product.belongsToMany(models.Order, {
      through: models.OrderProduct
    });
  };
  return Product;
};