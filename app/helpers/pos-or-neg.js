import Ember from 'ember';

export function posOrNeg(params) {
  if(params > 0){
    return Ember.String.htmlSafe('<h3 class="votes pos">' + params + '</h3>');
  }
  else if(params < 0){
    return Ember.String.htmlSafe('<h3 class="votes neg">' + params + '</h3>');
  }
  else {
    return Ember.String.htmlSafe('<h3 class="votes">' + params + '</h3>');
  }

}

export default Ember.Helper.helper(posOrNeg);
