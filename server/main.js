import { Meteor } from 'meteor/meteor';

Meteor.methods({
  go() {
    require('bcrypt').hash('a', 3, function() {});
  }
});
