const { Profile } = require("../models");

const profileData = [
  {
    user_id: 1,
    profile_name: "Jordan Fox",
    profile_bio:
      "Hey there, I'm an profession soccer player and live in London. I grew up in Moscow and came to the UK when I was 7 years old. I love swimming and hanging out with family.",
  },
  {
    user_id: 2,
    profile_name: "London Bridge",
    profile_bio:
      "Hi, I'm London and I'm a make up artist. I love practicing my creative on unique faces. I grew up in Georgia, but currently live in Washington",
  },
];

const seedProfiles = () =>
  Profile.bulkCreate(profileData, { individualHooks: true });

module.exports = seedProfiles;
