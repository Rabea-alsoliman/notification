/* eslint-disable func-names */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('User', {
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
      username: {
          type: DataTypes.STRING,
          allowNull: true,
        },
    }, {
      tableName: 'user',
    });
    };
