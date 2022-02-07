const User = require("./User");
const Profile = require("./Profile");
const ProfileInfo = require("./ProfileInfo");

User.hasOne(Profile, {
  foreignKey: "profile_id",
  onDelete: "SET NULL",
});
Profile.belongsTo(User, {
  foreignKey: "profile_id",
  onDelete: "SET NULL",
});

Profile.hasOne(ProfileInfo, {
  foreignKey: "profile_info_id",
  onDelete: "SET NULL",
});
ProfileInfo.belongsTo(Profile, {
  foreignKey: "profile_id",
  onDelete: "SET NULL",
});

module.exports(User, Profile, ProfileInfo);
