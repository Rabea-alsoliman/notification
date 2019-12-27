/* eslint-disable func-names */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Like', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'post',
        key: 'id',
      },
    },
    like: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
  }, {
    tableName: 'like',
  });
};
