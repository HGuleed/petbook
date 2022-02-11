// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Likes extends Model {}

// // create fields/columns for Likes model
// Likes.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//     },
//     likes: {
//       type: DataTypes.INTEGER,
//     },
//     post_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "profile",
//         key: "id",
//       },
//     },
//   },
//   {
//     sequelize: sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "likes",
//   }
// );

// module.exports = Likes;
