import Ember from 'ember';

export default Ember.Component.extend({
  loginFormOpen: false,

  actions: {
    openLoginForm() {
      this.set('loginFormOpen', true);
    },
    closeLoginForm() {
      this.set('loginFormOpen', false);
      this.set('username', '');
      this.set('password', '');
    },
    logIn1() {
      var credentials = {
        username: this.get('username'),
        password: this.get('password')
      };
      if(credentials.username && credentials.password) {
        this.sendAction('logIn2', credentials);
        this.set('loginFormOpen', false);
        this.set('username', '');
        this.set('password', '');
      }
      else {
        alert('Both a username and password are required to log in.');
      }
    }
  }
});
