(function() {
  var $siteHeader  = $('#site-header'),
      headerHeight = $siteHeader.outerHeight(),
      $slide       = $('.slide'),
      $winWidth    = $(window).width();

  if ($winWidth < 481) {
    headerHeight = 0;
  }

  console.log($winWidth);

  $slide.waypoint(function(direction) {
    var $this = $(this),
        slide = $this.data('slide'),
        $link = $siteHeader.find('[data-slide="' + slide + '"]');

    if (direction === 'down') {
      $siteHeader.find('.active').not('[data-slide="' + slide + '"]').removeClass('active');
      $siteHeader.find('[data-slide="' + slide + '"]').addClass('active');
    }
  }, { offset: headerHeight })
  .waypoint(function(direction) {
    var $this = $(this),
        slide = $this.data('slide'),
        $link = $siteHeader.find('[data-slide="' + slide + '"]');

    if (direction === 'up') {
      $siteHeader.find('.active').removeClass('active');
      $siteHeader.find('[data-slide="' + slide + '"]').addClass('active');
    }
  }, {
    offset: function() {
      return -$(this).height() - headerHeight;
    }
  })

  var scrollToIt = function(dataslide) {
    $('html,body').animate({
      scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top - headerHeight
    }, 2000, 'easeInOutQuint');
  }

  $(document).on('click', '#site-header a', function(e) {
    var dataslide = $(this).parent().data('slide');

    e.preventDefault();
    scrollToIt(dataslide);
  });
}());

$(function() {
  $.stellar();
});
