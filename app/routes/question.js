import Ember from 'ember';

export default Ember.Route.extend({
  user: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    updateQuestion5(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
    },
    saveAnswer5(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
    },
    upvote5(answer) {
      answer.set('votes', answer.get('votes') + 1);
      answer.save();
    },
    downvote5(answer) {
      answer.set('votes', answer.get('votes') - 1);
      answer.save();
    },
    logIn5(credentials) {
      var userInScope = this.get('user');
      this.store.query('user', {
        orderBy: 'username',
        equalTo: credentials.username
      }).then(function(results){
        if(results.content.length && results.content[0]._data.password === credentials.password) {
          userInScope.logIn(credentials.username, credentials.password);
        }
        else {
          alert("Either the username or password you entered was invalid.");
        }
      });
    },
    signUp5(credentials) {


      var userInScope = this.get('user');
      var newUser = this.store.createRecord('user', credentials);
      this.store.query('user', {
        orderBy: 'username',
        equalTo: credentials.username
      }).then(function(results){
        if(results.content.length) {
          alert("The username '" + credentials.username + "' is not available.");
        }
        else {
          newUser.save();
          userInScope.signUp(credentials.username, credentials.password);
        }
      });
    },
    logOut3() {
      this.get('user').logOut();
    }
  }
});
