import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer3(params) {
      console.log(params.question);
      console.log("3");
      this.sendAction('saveAnswer4', params);
    }
  }
});
