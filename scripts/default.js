////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  function hiddenCode() {

    var kkeys = [];
    var konami = '38,38,40,40,37,39,37,39,66,65'; // up, up, down, down, left, right, left, right, b, a

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    $(document).keydown(function(e) {
      kkeys.push(e.keyCode);
      if (kkeys.toString().indexOf(konami) >= 0) {
        kkeys = [];
        window.location.href = 'https://youtu.be/010KyIQjkTk';
      }
    });
  }

  function revealContent() {

    $('body').removeClass('invisible').addClass('fadeIn');
  }

  function parallaxHeader() {

    var $falseHeader = $('body > .page > .container-fluid > main');
    var $fixedHead = $('.navbar');
    var stickyHeight = $falseHeader.offset().top;

    $(window).scroll(function() {

      if ($(window).scrollTop() > $falseHeader.height()) {
          $fixedHead.addClass('is-active');
      } else {
          $fixedHead.removeClass('is-active');
      }
    });

    // $(window).scroll(function() {
    //
    //   var wScroll = $(this).scrollTop();
    //
    //   if (wScroll >= stickyHeight) {
    //     fixedHead.addClass('is_active');
    //   } else {
    //     fixedHead.removeClass('is_active');
    //   }
    //   console.log(wScroll);
    // });

  }

  function smoothScrollToTop() {

    window.scrollTo({top: 0, behavior: 'smooth'});
  }

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

jQuery(document).ready(function($) {

  hiddenCode();
  revealContent();
  smoothScrollToTop();

  if (document.body.classList.contains('index-Kr99nnb4')) {
    parallaxHeader();
  }

  $('.navbar-toggler').click(function() {
    $('main > form').toggleClass('fadeOut');
  });

  console.log('↑ ↑ ↓ ↓ ← → ← → b a');
});

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
