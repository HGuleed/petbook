const { Model, DataTypes, Sequelize } = require("sequelize");
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
    profile_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 18],
      },
    },
    profile_bio: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [15, 130],
      },
    },
    profile_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "profile",
        key: "id",
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
