const router = require('express').Router();
const { User, Profile } = require('../../models');

router.get('/', (req, res) => {

    User.findAll({
    })
    .then(user => res.json(user))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

module.exports = router;