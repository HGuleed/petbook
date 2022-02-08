const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Profile extends Model {}

Profile.init({
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
  profile_info_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "profileinfo",
      key: "id",
    },
  },
  pet_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "pet",
      key: "id",
    },
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "post",
      key: "id",
    },
  },
  // likes_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: "likes",
  //     key: "id",
  //   },
  // },

  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "profile",
});
module.exports = Profile;
