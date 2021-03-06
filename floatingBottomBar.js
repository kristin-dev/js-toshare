/**
 * This script slides up the bottom call to action bar on different content
 * types. For each content type there needed to be a different point that the
 * bar slides up dependent on another element being visible. Also after a few
 * seconds the bar needs to transition to a smaller height (we add the class
 * 'lower' to do this.)
 * 
 * Ideally, I would flush this out so that it could applied to hiding and
 * showing different elements at different points, just based on an array.
 *
 */
(function($, Drupal) {
  Drupal.behaviors.zicassoFloatingBottomBar = {
    attach: function() {

    var floatingBottomBar = function(contentType, fieldToStartShowing) {
      if (contentType.length > 0) {
        // Show menu when the Tours View is 50px from the top - slide up
        var ctaButton = fieldToStartShowing;
        var ctaButtonY = ctaButton.offset().top;
        var ltlBottomBar = $('#z-float-bottom-bar');

        var isFixed = false;
        var $w = $(window);
        $w.scroll(function() {
          var scrollTop = $w.scrollTop();
          var shouldBeFixed = scrollTop > ctaButtonY;
          if (shouldBeFixed && !isFixed) {
            ltlBottomBar.slideDown(500);
            setTimeout(function(){
              ltlBottomBar.addClass('lower');
            }, 6000);
            isFixed = true;
          }
          else if (!shouldBeFixed && isFixed)
          {
            ltlBottomBar.css({
              display: 'none'
            });
            ltlBottomBar.removeClass('lower');
            isFixed = false;
          }
        });
        
      }
    };
    
    // This should be an array that's iterated through.
      floatingBottomBar($('.node-type-tours'),$('.field-name-ltl-call-to-action'));
      floatingBottomBar($('.node-type-reviewslanding'),$('#block-block-8 .center-button'));
      floatingBottomBar($('.node-type-tour'),$('.tour-sidebar-inquire-wrapper'));
      floatingBottomBar($('.node-type-travelreview'),$('#block-block-4 .center-button'));
    }
  };
})(jQuery, Drupal, this);






