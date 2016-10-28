import Ember from 'ember';

export default Ember.Component.extend({
  addQuestionFormIsOpen: false,
  actions: {
    openAddQuestionForm() {
      this.set('addQuestionFormIsOpen', true);
    },
    closeAddQuestionForm() {
      this.set('addQuestionFormIsOpen', false);
    }
  }
});
