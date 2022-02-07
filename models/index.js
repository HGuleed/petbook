const User = require("./User");
const Profile = require("./Profile");
const ProfileInfo = require("./ProfileInfo");
const Pet = require("./Pet");

// Association between User and Profile
User.hasOne(Profile, {
  foreignKey: "profile_id",
  onDelete: "SET NULL",
});
Profile.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// Association between Profile and ProfileInfo
Profile.hasOne(ProfileInfo, {
  foreignKey: "profile_info_id",
  onDelete: "SET NULL",
});
ProfileInfo.belongsTo(Profile, {
  foreignKey: "profile_id",
  onDelete: "SET NULL",
});

// Association between Profile and Pet
Profile.hasMany(Pet, {
  foreignKey: "pet_id",
  onDelete: "SET NULL",
});

Pet.belongsTo(Profile, {
  foreignKey: "profile_id",
});

module.exports(User, Profile, ProfileInfo, Pet);
