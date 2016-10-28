import Ember from 'ember';

export default Ember.Component.extend({
  addAnswerFormIsOpen: false,
  actions: {
    openAddAnswerForm() {
      this.set('addAnswerFormIsOpen', true);
    },
    closeAddAnswerForm() {
      this.set('addAnswerFormIsOpen', false);
    },
    saveAnswer1() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        question: this.get('question')
      };
      this.set('addAnswerFormIsOpen', false);
      this.sendAction('saveAnswer2', params);
      console.log(params.question);
      console.log("1");
    }
  }
});
