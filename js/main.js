jQuery(document).ready(function() {
  // **************************************
  // Anchor scroll fix
  function wrapEllementsBetween(currentId, nextCssSelector) {
    var elementsToWrap = jQuery(currentId).nextUntil(nextCssSelector).addBack(),
      cleanCurrentId = currentId.replace('#', ''),
      article = jQuery('<article/>', {
        id: cleanCurrentId
      }),
      elementWithCurrentId = jQuery(currentId);
    article.insertAfter(elementWithCurrentId).append(elementsToWrap);
    jQuery('section[id="' + cleanCurrentId + '"]').removeAttr('id');
  }

  function handleScrollLogic() {
    var cur_pos = jQuery(this).scrollTop();
    articles.each(function() {
      var subtitleHeight = jQuery(this).find('h3').outerHeight(true),
        top = jQuery(this).offset().top - headerHeight - subtitleHeight,
        bottom = top + jQuery(this).outerHeight(true);
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        articles.removeClass('active');
        jQuery(this).addClass('active');
        nav.find('a[href="#' + jQuery(this).attr('id') + '"]').addClass('active');
      } else {
        nav.find('a[href="#' + jQuery(this).attr('id') + '"]').removeClass('active');
      }
    });
  }

  function dynamicallyHandleAnchors() {
    var anchorIds = jQuery('nav .links a').map(function(index, elem) {
      return jQuery(elem).attr('href');
    });
    // Iterate anchor ids and wrap sections into parent ids
    for (var i = 0; i < anchorIds.length; i++) {
      var currentId = anchorIds[i],
        nextCssSelector = i === anchorIds.length - 1 ? '.widget-links' : anchorIds[i + 1];
      wrapEllementsBetween(currentId, nextCssSelector);
    }
  }

  // Init
  dynamicallyHandleAnchors();
  var articles = jQuery('article'),
    nav = jQuery('nav'),
    headerHeight = jQuery('header').outerHeight(true);
  handleScrollLogic();
  jQuery(window).off('scroll').on('scroll', handleScrollLogic);
  // End anchor scroll fix
  // // **************************************
  // Click on anchor -> scrolls to id
  jQuery('nav .links a').off('click').on('click', function() {
    var $el = jQuery(this),
      id = $el.attr('href');
    jQuery('html, body').animate({
      scrollTop: jQuery(id).offset().top - jQuery('header').outerHeight(true)
    }, 1000);
    return false;
  });
  jQuery('#go-to-top').each(function() {
    jQuery(this).click(function() {
      jQuery('html,body').animate({
        scrollTop: 0
      }, 'slow');
      return false;
    });
  });
  jQuery(".single").fancybox({
    openEffect : 'none',
    closeEffect: 'none',
    itleShow   : false
  });

  jQuery('.search').click(function(e) {
    jQuery('header').toggleClass('active');
  });
  jQuery('.form-top input').outside('click', function(e) {
    if (jQuery('header').hasClass('active') && e.target.className.indexOf("fa-search") == -1) {
      jQuery('header').removeClass('active');
      jQuery('.form-top input').val('');
    }
  });
  if (jQuery(window).width() < 767) {

    jQuery(window).scroll(function() {
      var sticky = jQuery('.sidebar');

      var scroll = jQuery(window).scrollTop();

      if (scroll >= 56) {
        sticky.css("top", "56px");
        sticky.css("position", "fixed");

      }
      else {
        sticky.css("top", "0");
        sticky.css("position", "relative");
      }
    });

    jQuery('.search').click(function(e) {
      jQuery('.menu-mobile').removeClass('active-menu');
      jQuery('.menu').removeClass('active-menu');
      jQuery('body').removeClass('active-menu');
    });
    jQuery('.menu-mobile').click(function(e) {
      jQuery('header').removeClass('active');
    });
    jQuery('.list-mobile li a').click(function(event) {
      event.stopPropagation();
      jQuery('.list-mobile').toggleClass('active');
      jQuery('.list-drop').toggleClass('active');
    });
    var article = jQuery('article'),
      list = jQuery('.list-drop'),
      headerHeight = jQuery('header').outerHeight(),
      bodyPadding = parseInt(jQuery('body').css('padding-top')),
      listHeight = jQuery('.list-mobile').outerHeight();

    jQuery(window).on('scroll', function() {
      var cur_pos = jQuery(this).scrollTop();

      article.each(function() {
        var top = jQuery(this).offset().top - headerHeight,
          bottom = top + jQuery(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          list.find('a').removeClass('active');
          article.removeClass('active');
          jQuery(this).addClass('active');
          list.find('a[href="#' + jQuery(this).attr('id') + '"]').addClass('active');
        }
      });
    });
    list.find('a').on('click', function() {
      var $el = jQuery(this),
        id = $el.attr('href'),
        listHeight = jQuery('.list-mobile').outerHeight();

      jQuery('html, body').animate({
        scrollTop: jQuery(id).offset().top - headerHeight - listHeight - bodyPadding -10
      }, 1000);
    });
  } else {
    jQuery(window).scroll(function() {
      var sticky = jQuery('.sidebar');

      var scroll = jQuery(window).scrollTop();

      if (scroll >= 56) {
        sticky.css("top", "56px");
        sticky.css("position", "fixed");
      }
      else {
        sticky.css("top", "240px");
        sticky.css("position", "absolute");
      }

    });
  }
  jQuery('.menu-mobile').click(function(event) {
    event.stopPropagation();
    jQuery(this).toggleClass('active-menu');
    jQuery('.menu').toggleClass('active-menu');
    jQuery('body').toggleClass('active-menu');
    jQuery('.translate-drop').removeClass('active');
  });
  jQuery('.menu').on("click", function(event) {
    event.stopPropagation();
  });
  jQuery(document).on("click", function() {
    jQuery('.menu-mobile').removeClass('active-menu');
    jQuery('.menu').removeClass('active-menu');
    jQuery('body').removeClass('active-menu');
  });
  jQuery('.translate').click(function(event) {
    event.stopPropagation();
    jQuery('.translate-drop').toggleClass('active');
    jQuery('.menu-mobile').removeClass('active-menu');
    jQuery('.menu').removeClass('active-menu');
    jQuery('body').removeClass('active-menu');
  });
  jQuery('.translate-drop').on("click", function(event) {
    event.stopPropagation();
  });
  jQuery(document).on("click", function() {
    jQuery('.translate-drop').removeClass('active');
  });
  jQuery('.translate-mobile').click(function(e) {
    jQuery(this).toggleClass('active');
  });
  jQuery("a[rel^='prettyPhoto']").prettyPhoto();
  var owl = jQuery('.owl-carousel');
  owl.owlCarousel({
    items             : 1,
    loop              : true,
    margin            : 10,
    dots              : true,
    nav               : true,
    smartSpeed        : 4000,
    autoplay          : true,
    autoplayTimeout   : 8000,
    autoplayHoverPause: false
  });

  // start phase 2 new pages
  jQuery(".modal-footer .btn").click(function() {
    jQuery('iframe').attr('src', jQuery('iframe').attr('src'));
  });
  jQuery('.video-modal-item').on('hidden.bs.modal', function () {
    jQuery('iframe').attr('src', jQuery('iframe').attr('src'));
  });

  jQuery(".video-widget .play-video").click(function () {
    var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC;
    jQuery(theModal + ' iframe').attr('src', videoSRCauto);
    jQuery(theModal + ' button.close').click(function () {
      jQuery(theModal + ' iframe').attr('src', '');
    });
  });

  jQuery('.iframe-mobile img').click(function() {
    video = '<iframe src="' + jQuery(this).attr('data-video') + '?autoplay=1&loop=1" frameborder="0" allowfullscreen></iframe>';
    jQuery(this).replaceWith(video);
    jQuery('.play-video').css("display", "none");
  });
  /// end phase 2 new pages

});
jQuery(document).ready(function() {

  language_watch();
  jQuery("a[rel^='prettyPhoto'], a[rel^='prettyPhoto[myGallery]']").prettyPhoto({
    deeplinking: false
  });

});
(function($) {
  $.fn.outside = function(ename, cb) {
    return this.each(function() {
      var $this = jQuery(this),
        self = this;
      jQuery(document).bind(ename, function tempo(e) {
        if (e.target !== self && !$.contains(self, e.target)) {
          cb.apply(self, [e]);
          if (!self.parentNode) jQuery(document.body).unbind(ename, tempo);
        }
      });
    });
  };
}(jQuery));

function move_language() {
  jQuery("#localize-langs a").removeAttr("style").wrap("<li></li>");
  var translate = jQuery("#localize-langs").html();
  jQuery(".translate-drop").html(translate);
  jQuery(".translate-mobile ul").html(translate);

  jQuery(".translate-drop a").click(function() {
    jQuery(".translate-drop").removeClass("active");
  });
}

function language_watch() {
  if (document.getElementById('localize-widget')) {
    move_language();
  } else {
    setTimeout(function() {
      language_watch();
    }, 500);
  }
}

if (jQuery(window).width() < 767) {
  jQuery(".footer-icons a img").each(function() {
    jQuery(this).attr("src", jQuery(this).attr("data-mobile"));
  });
}

jQuery( window ).resize(function() {
  if (jQuery(window).width() < 767) {
    jQuery(".footer-icons a img").each(function() {
      jQuery(this).attr("src", jQuery(this).attr("data-mobile"));
    });
  }
  else {
    jQuery(".footer-icons a img").each(function() {
      jQuery(this).attr("src", jQuery(this).attr("data-desktop"));
    });
  }
});
