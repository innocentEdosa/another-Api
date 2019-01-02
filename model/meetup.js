const meetup = [];

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
};
