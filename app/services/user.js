import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: null,
  loginFormOpen: false,
  signupFormOpen: false,

  signUp(_username, _password) {
    this.set('currentUser', {
      username: _username,
      password: _password
    });
  },
  logIn(_username, _password) {
    this.set('currentUser', {
      username: _username,
      password: _password
    });
  },
  logOut() {
    this.set('currentUser', null);
  }
});
