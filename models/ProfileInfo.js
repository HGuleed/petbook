const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ProfileInfo extends Model {}

ProfileInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    profile_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "profile",
        key: "id",
      },
    },
    profile_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 30],
      },
    },
    profile_descrip: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [30, 160],
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "profileinfo",
  }
);

module.exports = ProfileInfo;
