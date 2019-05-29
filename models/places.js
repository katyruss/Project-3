'use strict';
module.exports = (sequelize, DataTypes) => {
  const Places = sequelize.define('Place', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    yelp_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postal_code: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Places.associate = function (models) {
    Places.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  };
  return Places;
};