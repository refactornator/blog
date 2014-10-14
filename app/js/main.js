
/* global Masonry */

var container = document.querySelector('#projects');

if(container) {
  var msnry = new Masonry( container, {
    // options
    itemSelector: '.project',
    gutter: 20
  });
}
