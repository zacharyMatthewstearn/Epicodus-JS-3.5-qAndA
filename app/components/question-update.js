import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionFormIsOpen: false,
  actions: {
    openUpdateQuestionForm() {
      this.set('updateQuestionFormIsOpen', true);
    },
    closeUpdateQuestionForm() {
      this.set('updateQuestionFormIsOpen', false);
    },
    updateQuestion1(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
        answers: this.get('answers')
      };
      this.set('updateQuestionFormIsOpen', false);
      this.sendAction('updateQuestion2', question, params);
    }
  }
});
