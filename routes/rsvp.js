const express = require('express');

const router = express.Router();

const { body } = require('express-validator/check');

const rsvpController = require('../controller/rsvp');

router.post('/', [
  body('user').custom((value) => {
    if (value === undefined) { throw new Error('user must be defined'); }
    return true;
  }),
  body('response').custom((value) => {
    if (value === undefined) { throw new Error('response must be defined'); }
    return true;
  }),
  body('meetupId').custom((value) => {
    if (value === undefined) { throw new Error('meetupId must be defined'); }
    return true;
  }),
], rsvpController.createRsvp);

module.exports = router;
