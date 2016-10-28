import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion3(question, params) {
      this.sendAction('updateQuestion4', question, params);
    },
    saveAnswer3(params) {
      console.log(params.question);
      console.log("3");
      this.sendAction('saveAnswer4', params);
    }
  }
});
