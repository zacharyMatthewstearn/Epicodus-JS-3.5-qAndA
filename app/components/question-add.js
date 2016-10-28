import Ember from 'ember';

export default Ember.Component.extend({
  addQuestionFormIsOpen: false,
  actions: {
    openAddQuestionForm() {
      this.set('addQuestionFormIsOpen', true);
    },
    closeAddQuestionForm() {
      this.set('addQuestionFormIsOpen', false);
    },
    saveQuestion1() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.set('addQuestionFormIsOpen', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
