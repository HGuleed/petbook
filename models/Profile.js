const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/connection");

class Profile extends Model {}

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "profile",
  }
);

module.exports = Profile;
