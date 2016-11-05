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
      this.store.query('user', {
        orderBy: 'username',
        equalTo: credentials.username
      }).then(function(results){
        if(results.content.length) {
          console.log("There is a user stored with username '" + credentials.username + "'");
        }
        else {
          console.log("There is NO user stored with username '" + credentials.username + "'");
        }
      });
      this.get('user').logIn(credentials.username, credentials.password);
    },
    signUp5(credentials) {
      this.get('user').signUp(credentials.username, credentials.password);
      var newUser = this.store.createRecord('user', credentials);
      newUser.save();
    },
    logOut3() {
      this.get('user').logOut();
    }
  }
});
