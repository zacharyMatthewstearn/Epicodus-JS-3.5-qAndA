import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upvote1(answer) {
      this.sendAction('upvote2', answer);
    },
    downvote1(answer) {
      this.sendAction('downvote2', answer);
    }
  }
});
