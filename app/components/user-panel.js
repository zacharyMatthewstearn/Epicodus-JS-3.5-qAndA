import Ember from 'ember';

export default Ember.Component.extend({
  user: Ember.inject.service(),

  loginFormOpen: false,
  signupFormOpen: false,

  actions: {
    logIn3(credentials) {
      this.sendAction('logIn4', credentials);
    },
    signUp3(credentials) {
      this.sendAction('signUp4', credentials);
    },
    logOut1() {
      this.sendAction('logOut2');
    },
    setLoginFormOpenness(isOpen) {
      this.set('loginFormOpen', isOpen);
    },
    setSignupFormOpenness(isOpen) {
      this.set('signupFormOpen', isOpen);
    }
  }
});
