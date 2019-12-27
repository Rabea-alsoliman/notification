/* eslint-disable func-names */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    txt: {
        type: DataTypes.STRING,
        allowNull: true,
    },
  }, {
    tableName: 'post',
  });
};
