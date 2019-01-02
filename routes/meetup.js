const express = require('express');

const { body } = require('express-validator/check');

const router = express.Router();

//  import the meetup controller
const meetupController = require('../controller/meetup');

// request list of all meetup
router.get('/', meetupController.getMeetups);

// request for a specific meetup
router.get('/:meetupId', meetupController.getMeetup);

// request the creation of a new meetup
router.post('/',
// add simple validation to post middleware using express-validator
  [body('location').custom((value) => {
    if (value === undefined || '') { throw new Error('location cannot be undefined'); }
    return true;
  }),
  body('topic', 'Topic must be at least 3 characters long').isLength({ min: 3 }).custom((value) => {
    if (value === undefined) { throw new Error('topic cannot be empty'); }
    return true;
  }),
  body('tags', 'Tags should be sent as an array').isArray(),
  body('happeningOn', 'happeningOn must be defined').custom((value) => {
    if (value === undefined) { throw new Error('happeningOn must be defined'); }
    return true;
  }),
  body('description', 'description must be defined and more than 10 characters').isLength({ min: 10 }).custom((value) => {
    if (value === undefined) { throw new Error('description must be defined'); }
    return true;
  }),
  body('createdBy').custom((value) => {
    if (value === undefined) { throw new Error('createdBy must be defined'); }
    return true;
  }),
  ], // validation block ends here
  meetupController.createMeetup);


module.exports = router;
