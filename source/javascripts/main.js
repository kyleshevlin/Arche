'use strict';

var App = {

  init: function() {
    console.log('Arche');
  }
};

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(App.init);
