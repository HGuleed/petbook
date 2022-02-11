const User = require("./User");
const Profile = require("./Profile");
const Pet = require("./Pet");
const Post = require("./Post");

// Association between User and Profile
User.hasOne(Profile, {
  foreignKey: "profile_id",
  // onDelete: "SET NULL",
  constraints: false,
});
Profile.belongsTo(User, {
  foreignKey: "user_id",
  constraints: false,
});

// Association between User and Post
// User.hasOne(Post, {
//   foreignKey: "post_id",
//   onDelete: "SET NULL",
// });
// Post.belongsTo(User, {
//   foreignKey: "user_id",
//   constraints: false,
// });

// // Association between User and Pet
// User.hasOne(Pet, {
//   foreignKey: "pet_id",
//   onDelete: "SET NULL",
// });
// Profile.belongsTo(User, {
//   foreignKey: "user_id",
//   constraints: false,
// });

module.exports = { User, Profile };
