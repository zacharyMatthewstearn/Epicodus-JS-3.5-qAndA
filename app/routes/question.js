import Ember from 'ember';

export default Ember.Route.extend({
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
    }
  }
});
