
/* global Masonry */

function initMasonry() {
  var container = document.querySelector('#projects');

  if(container) {
    new Masonry( container, {
      itemSelector: '.project',
      gutter: 20
    });
  }
};
initMasonry();

pjax.connect({
  container: 'site',
  complete: function(e){
    initMasonry();
  }
});
