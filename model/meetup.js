const meetup = [{
  id: 2,
  createdOn: 'when the meetp was created',
  location: 'location',
  images: 'this is the imgae url',
  topic: 'meetup topic',
  happeningOn: 'this is when the meetup is happening',
  tags: ['business', 'entertianment', 'refrigerator', 'sleepless night'],
  description: 'this s a very short description of this meetup',
  noOfQuestions: 4,
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
};
