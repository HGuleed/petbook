const User = require("./User");
// const Profile = require("./Profile");
// const ProfileInfo = require("./ProfileInfo");
// const Pet = require("./Pet");
// const Post = require("./Post");
// const Comment = require("./Comment");
// const Likes = require("./Likes");

// Association between User and Profile
// User.hasOne(Profile, {
//   foreignKey: "profile_id",
//   onDelete: "SET NULL",
// });
// Profile.belongsTo(User, {
//   foreignKey: "user_id",
//   constraints: false,
// });

// Association between Profile and ProfileInfo
// Profile.hasOne(ProfileInfo, {
//   foreignKey: "profile_info_id",
//   onDelete: "SET NULL",
// });
// ProfileInfo.belongsTo(Profile, {
//   foreignKey: "profile_id",
// });

// // Association between Profile and Pet
// Profile.hasMany(Pet, {
//   foreignKey: "pet_id",
//   onDelete: "SET NULL",
// });

// Pet.belongsTo(Profile, {
//   foreignKey: "profile_id",
// });

// //Association between Profile and Post
// Profile.hasMany(Post, {
//   foreignKey: "profile_id",
//   onDelete: "SET NULL",
// });

// Post.belongsTo(Profile, {
//   foreignKey: "post_id",
// });

// //Associates between Post and Comment
// Post.hasMany(Comment, {
//   foreignKey: "comment_id",
//   onDelete: "SET NULL",
// });

// Comment.belongsTo(Post, {
//   foreignKey: "post_id",
// });

// //Associates between Post and Likes
// Post.hasOne(Likes, {
//   foreignKey: "post_id",
//   onDelete: "SET NULL",
// });

// Likes.belongsTo(Post, {
//   foreignKey: "likes_id",
// });
module.exports = { User };
