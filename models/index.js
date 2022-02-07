const User = require("./User");
const Profile = require("./Profile");

Profile.belongsTo(User, {
  foreignKey: "profile_id",
  onDelete: "SET NULL",
});

module.exports(User, Profile);
