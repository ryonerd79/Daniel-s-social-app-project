const router = require('express').Router();
const {
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  getThoughts,
} = require('../../controllers/thoughtController.js');


router.route('/').get(getThoughts).post(createThought);


router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;