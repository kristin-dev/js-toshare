/**
 * JS for Menu Local Tasks.
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






