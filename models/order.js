'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    status: DataTypes.STRING,
    deliveryDate: DataTypes.DATE,
    UserId: DataTypes.INTEGER
  }, {});
  Order.associate = function (models) {
    Order.belongsTo(models.User);
    Order.belongsToMany(models.Product, {
      through: models.OrderProduct
    });
  };
  return Order;
};