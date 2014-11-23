/* global Masonry, Velocity, pjax, DISQUS */
/* jshint ignore:start */

window.mobilecheck = function() {
  var check = false;
  (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

var onMobile = mobilecheck();
var $socialShare = $(".social-share");

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
  if(typeof DISQUS !== 'undefined' && document.querySelector('#disqus_thread')) {
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

function reloadShare() {
  if(!onMobile) {
    if(document.querySelector('.post')) {
      $socialShare.velocity("fadeIn");
    } else {
      $socialShare.velocity("fadeOut");
    }
  }
}

$(function() {
  if(onMobile) {
    startAnimation();
  } else {
    $("header").hover(startAnimation, stopAnimation);
  }

  reloadShare();
  initMasonry();
});

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
    $.Velocity(containerEl, {
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
            reloadShare();

            $.Velocity(containerEl, {
              opacity: [ 1, 0 ], translateY: [ 0, 20 ], translateZ: 0
            }, {
              duration: 300,
              queue: false
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
