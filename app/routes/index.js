import Ember from 'ember';

export default Ember.Route.extend({
  user: Ember.inject.service(),
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
    },
    logIn5(credentials) {
      this.get('user').logIn(credentials.username, credentials.password);
      // console.log(credentials.username + " logged in with the password: " + credentials.password);
    },
    signUp5(credentials) {
      this.get('user').signUp(credentials.username, credentials.password);
    },
    logOut3() {
      this.get('user').logOut();
      // console.log("logged out");
    }
  }
});
