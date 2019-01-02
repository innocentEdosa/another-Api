// meetups connect to question in one to many relationship.
// a question must be part of a meetup
const Meetup = require('./meetup');

const question = [];

module.exports = class Question {
  constructor() {
    this.id = question.length + 1;
    this.createdOn = new Date();
    this.vote = 0;
  }

  create(createdBy, meetup, title, body) {
    this.createdBy = createdBy;
    this.meetup = meetup;
    this.title = title;
    this.body = body;
    question.push(this);
    Question.notifyMeetup(meetup);
  }

  static notifyMeetup(meetupId) {
    const meetup = Meetup.findMeetup(meetupId);
    meetup[0].noOfQuestions += 1;
  }

  static upvote(questionId) {
    const Id = Number(questionId);
    const found = [];
    for (let i = 0; i < question.length; i += 1) {
      if (question[i].id === Id) {
        question[i].vote += 1;
        found.push(question[i]);
        return found;
      }
    }
    return -1;
  }
};
