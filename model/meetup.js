const meetup = [{
  id: 3,
  createdOn: new Date(),
  location: 'aduwawa',
  images: 'this is the imgae url',
  topic: 'This is the best meetup ever ',
  happeningOn: new Date(2019, 2, 1),
  tags: ['business', 'entertianment'],
  description: 'this is a very short description of this very second meetup',
  noOfQuestions: 2,
}];

// create a class to handle the meetup array
module.exports = class Meetup {
  constructor() {
    this.id = meetup.length + 1;
    this.createdOn = new Date();
    this.image = '';
    this.tags = [];
    this.noOfQuestions = 0;
  }

  create(location, images, topic, happeningOn, tags, description, createdBy) {
    this.location = location;
    if (images) {
      this.images = images;
    }
    this.topic = topic;
    this.happeningOn = happeningOn;
    if (tags) {
      this.tags = this.tags.concat(tags);
    }
    this.description = description;
    this.createdBy = createdBy;
    meetup.push(this);
  }

  static getAll() {
    return meetup;
  }

  static findMeetup(meetupId) {
    const Id = Number(meetupId);
    const found = [];
    for (let i = 0; i < meetup.length; i += 1) {
      if (meetup[i].id === Id) {
        // const questions = this.getQuestions(meetup[i].id);
        // meetup[i].questions = questions;
        found.push(meetup[i]);
        return found;
      }
    }
    return -1;
  }

  static getUpcomingMeetup() {
    const upcoming = [];
    for (let i = 0; i < meetup.length; i += 1) {
      if (meetup[i].happeningOn > new Date()) {
        upcoming.push(meetup[i]);
      }
    }
    return upcoming;
  }

  static getTopic(meetupId) {
    for (let i = 0; i < meetup.length; i += 1) {
      if (meetup[i].id === meetupId) {
        return meetup[i].topic;
      }
    }
    return -1;
  }
};
