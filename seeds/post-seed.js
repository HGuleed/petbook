const { Post } = require("../models");

const postData = [
  {
    user_id: 1,
    post_title: "test post 1",
    post_body: "test body 1",
  },
  {
    user_id: 2,
    post_title: "test post 2",
    post_body: "test body 2",
  },
];

const seedPost = () => Post.bulkCreate(petData);

module.exports = seedPost;
