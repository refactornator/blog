/* global Masonry, Velocity, pjax, DISQUS */
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

function reloadDisqus() {
  if(DISQUS !== undefined && document.querySelector('#disqus_thread')) {
    var url = window.location.href,
      title = document.title;

    DISQUS.reset({
      reload: true,
      config: function () {
        this.page.url = url;
        this.page.title = title;
      }
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
    if(e.preventDefault){ e.preventDefault(); } else { e.returnValue = false; }

    // Take no action if we are already on said page
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
            reloadDisqus();

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
  } else if(element && element.href === 'https://twitter.com/share') {
    // TWITTERS 
    var width  = 575,
      height = 400,
      message = document.title,
      url    = element.href + '?text=' + encodeURIComponent(message),
      opts   = 'status=1' +
      ',width='  + width  +
      ',height=' + height;

    window.open(url, 'twitter', opts);

    return false;
  } else if(element && element.href === 'https://www.facebook.com/sharer/sharer.php') {
    // FACEBOOKS
    var width  = 575,
      height = 400,
      url    = 'https://www.facebook.com/sharer/sharer.php?u=' + document.location.href,
      opts   = 'width=' + width +
      ',height=' + height;

    window.open(url, 'twitter', opts);
  }
};
