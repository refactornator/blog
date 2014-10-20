/* global Masonry, Velocity, pjax */
/* jshint ignore:start */

function initMasonry() {
    var container = document.querySelector('#projects');

    if (container) {
        new Masonry(container, {
            itemSelector: '.project',
            isFitWidth: true,
            gutter: 20
        });
    }
}

initMasonry();

document.onclick = function(e) {
  e = e || window.event;
  var element = e.target || e.srcElement;
  while(element && element.tagName !== 'A') {
    element = element.parentNode || null;
  }

  if (element && element.host === document.location.host) {
    var container = 'site',
        containerEl = document.getElementById(container);

    // Allow middle click (pages in new windows)
    if (e.which > 1 || e.metaKey || e.ctrlKey) return;

    // Don't fire normal event
    if(e.preventDefault){ e.preventDefault(); }else{ e.returnValue = false; }

    // Take no action if we are already on said page?
    if (document.location.href === element.href) return false;

    // handle the load.
    Velocity(containerEl, {
      opacity: [ 0, 1 ], translateY: 20, translateZ: 0
    }, {
      queue: false,
      duration: 100,
      complete: function() {
        pjax.invoke({
          url: element.href || '/',
          container: containerEl,
          parseLinksOnload: false,
          complete: function(e) {
            initMasonry();

            Velocity(containerEl, {
              opacity: [ 1, 0 ], translateY: [ 0, 20 ], translateZ: 0
            }, {
              duration: 300
            });
          }
        });
      }
    });

    return false; // prevent default action and stop event propagation
  }
};
