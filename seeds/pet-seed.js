const { Pet } = require("../models");

const petData = [
  {
    user_id: 1,
    pet_name: "Joey",
    pet_age: "4",
    pet_breed: "husky",
    pet_descrip: " A loving fur ball with over active tendacies.",
  },
  {
    user_id: 1,
    pet_name: "Luna",
    pet_age: "8",
    pet_breed: "golden retriever",
    pet_descrip: " test description",
  },
];

const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;
