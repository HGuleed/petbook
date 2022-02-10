<<<<<<< HEAD
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// create our Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 40],
      },
    },
    post_body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
      },
    },
    profile_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "profile",
        key: "id",
      },
    },
    comment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "comment",
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

module.exports = Post;
=======
// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");
// // create our Post model
// class Post extends Model {}

// // create fields/columns for Post model
// Post.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//     },
//     post_title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [5, 40],
//       },
//     },
//     post_body: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1, 140],
//       },
//     },
//     profile_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "profile",
//         key: "id",
//       },
//     },
//     comment_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "comment",
//         key: "id",
//       },
//     },
//   },
//   {
//     sequelize: sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "post",
//   }
// );

// module.exports = Post;
>>>>>>> f59ab9cdb596f7d112dd88e4605acc284b1cbd3b
