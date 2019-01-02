const { validationResult } = require('express-validator/check'); // require validationresult

const Question = require('../model/question'); // import the question model

const Meetup = require('../model/meetup'); // import the meetup model

const util = require('./util/util'); // import utility functions

exports.createQuestion = (req, res) => { // handles the creation of new question
  const {
    createdBy, meetup, title, body,
  } = req.body;
  // create an error variable to hold error collected by express-validate body in the route
  const error = validationResult(req);
  // if the error variable is not empty reply user with the appropriate error message
  if (!error.isEmpty()) {
    const errorMessages = util.printError(error.array());
    return res.status(422).json({
      status: 422,
      error: errorMessages,
    });
  }
  // check if meetup exist before creating a question
  const meetupCheck = Meetup.findMeetup(meetup);
  if (meetupCheck === -1) {
    return res.status(422).json({
      status: 422,
      error: 'Meetup does not exist',
    });
  }
  // create new meetup from the meetup model
  const question = new Question();
  question.create(createdBy, meetup, title, body);
  return res.status(201).json({ status: 201, data: question });
};

exports.upvote = (req, res) => { // handles the upvote of a specific question
  const { questionId } = req.params;
  const upvote = Question.upvote(questionId);
  if (upvote < 0) {
    return res.status(404).json({ status: 404, error: 'This question does not exist' });
  }
  return res.status(200).json({ status: 200, data: upvote });
};

exports.downvote = (req, res) => { // handles the downvote of a specific question
  const { questionId } = req.params;
  const downvote = Question.downvote(questionId);
  if (downvote < 0) {
    return res.status(404).json({ status: 404, error: 'This question does not exist' });
  }
  return res.status(200).json({ status: 200, data: downvote });
};
