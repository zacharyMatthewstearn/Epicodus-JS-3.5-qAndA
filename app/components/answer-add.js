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
      if(params.content && params.author) {
        this.set('addAnswerFormIsOpen', false);
        this.sendAction('saveAnswer2', params);
      }
      else {
        alert("All fields are required for answer submission");
      }
    }
  }
});
