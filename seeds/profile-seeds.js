const { Profile } = require("../models");

const profileData = [
  {
    user_id: 1,
    profile_info_id: 1,
  },
  {
    user_id: 2,
    profile_info_id: 2,
  },
];

const seedProfiles = () => Profile.bulkCreate(profileData);

module.exports = seedProfiles;
