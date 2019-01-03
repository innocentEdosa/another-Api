const Meetup = require('./meetup');

const rsvp = [];

module.exports = class Rsvp {
  constructor() {
    this.id = rsvp.length + 1;
  }

  create(meetupId, user, response) {
    this.meetup = Number(meetupId);
    this.user = Number(user);
    this.topic = Meetup.getTopic(this.meetup);
    this.response = response;
    rsvp.push(this);
  }
};
