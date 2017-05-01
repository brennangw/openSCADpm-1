(function ($) {
   $('.btn-default').on('click', function (e) {
      e.preventDefault();
      var obj = $(this);

      obj.addClass('active');

      setTimeout(function () {
         obj.removeClass('active');
      }, 1500);

      // Load Boats
      if (obj.hasClass('btn-load-boats')) {
         if (!$('.load-boats-box').hasClass('open')) {
            $('.load-boats-box').slideToggle(1000);
            setTimeout (function () {
               $('.load-boats-box').addClass('open');
            }, 700);
         }
      }

      // Load Boats
      if (obj.hasClass('btn-load-destination')) {
         if (!$('.load-destinations-box').hasClass('open')) {
            $('.load-destinations-box').slideToggle(1000);
            setTimeout (function () {
               $('.load-destinations-box').addClass('open');
            }, 700);
         }
      }
   });
    
   // Fade In Page
   $(document).ready(function () {
      $('#hit1').click(function() {
         var search_url = "https://github.com/search?utf8=✓&q=ospm+";
         var pack_name = $('#search1').val();
         pack_name = pack_name.split(' ').join('+');
         pack_name = search_url.concat(pack_name);
         pack_name = pack_name.concat("&ref=simplesearch");
         window.location.href = pack_name;
      });
      $('#hit2').click(function() {
         alert($('#search2').val());
      });
      setTimeout(function () {
         $('body').addClass('dom-ready');
      }, 300);
   });
})(jQuery);



