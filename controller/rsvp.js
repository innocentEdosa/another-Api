const { validationResult } = require('express-validator/check'); // import validationresult

const Rsvp = require('../model/rsvp'); // import the rsvp model

const Meetup = require('../model/meetup'); // import the meetup model;

const util = require('./util/util'); // import utility functions

exports.createRsvp = (req, res) => { // handles the creation of rsvp
  const error = validationResult(req);
  // if the error variable is not empty reply user with the appropriate error message
  if (!error.isEmpty()) {
    const errorMessages = util.printError(error.array());
    return res.status(422).json({
      status: 422,
      error: errorMessages,
    });
  }
  const {
    meetupId, user, response,
  } = req.body;
  // check of meetup exists
  const found = Meetup.findMeetup(meetupId);
  if (found < 0) {
    return res.status(404).json({ status: 404, error: 'The requested meetup does not exist! Try with an appropriate meetupId' });
  }
  // create new meetup from the meetup model
  const rsvp = new Rsvp();
  rsvp.create(meetupId, user, response);
  return res.status(201).json({ status: 201, data: rsvp });
};
