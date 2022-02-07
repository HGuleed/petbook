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
        model: "profile-info",
        key: "id",
      },
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = ProfileInfo;
