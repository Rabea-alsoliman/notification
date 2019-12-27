/* eslint-disable func-names */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('UserDeviceToken', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    device_token: {
      type: DataTypes.STRING(1000),
    },
  }, {
    tableName: 'userDeviceToken',
  });
};
