'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_token: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Place)
  };
  return User;
};