<<<<<<< HEAD
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// create our Comment model
class Comment extends Model {}

// create fields/columns for Comment model
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    post_id: {
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
    modelName: "comment",
  }
);

module.exports = Comment;
=======
// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");
// // create our Comment model
// class Comment extends Model {}

// // create fields/columns for Comment model
// Comment.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//     },
//     comment: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1, 100],
//       },
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
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "comment",
//   }
// );

// module.exports = Comment;
>>>>>>> f59ab9cdb596f7d112dd88e4605acc284b1cbd3b
