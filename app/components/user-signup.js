import Ember from 'ember';

export default Ember.Component.extend({
  signupFormOpen: false,

  actions: {
    openSignupForm() {
      this.set('signupFormOpen', true);
      this.sendAction('setSignupFormOpenness', true);
    },
    closeSignupForm() {
      this.set('signupFormOpen', false);
      this.set('username', '');
      this.set('password1', '');
      this.set('password2', '');
      this.sendAction('setSignupFormOpenness', false);
    },
    signUp1() {
      var credentials = {
        username: this.get('username'),
        password: null
      };
      var password1 = this.get('password1');
      var password2 = this.get('password2');
      if(credentials.username && password1 && password2) {
        if(password1 === password2) {
          credentials.password = password1;
          this.sendAction('signUp2', credentials);
          this.sendAction('setSignupFormOpenness', false);
          this.set('signupFormOpen', false);
          this.set('username', '');
        }
        else {
          alert("Passwords did not match");
        }
        this.set('password1', '');
        this.set('password2', '');
      }
      else {
        alert('All fields are required to sign up.');
      }
    }
  }
});
