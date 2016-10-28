import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion3(question, params) {
      this.sendAction('updateQuestion4', question, params);
    }
  }
});
