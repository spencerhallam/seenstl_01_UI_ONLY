$( document ).ready(function() {
 
   $('#fav-toggle').click(function() {
     $('#fav-area').toggleClass('fav-hide')
   });

   $('#fav-toggle').click(function() {
       $('#ev-section').toggleClass('ev-section-wide');
   });

   $('#close-form').click(function() {
       $('#fav-form').toggleClass('hide-show')
   });

   $('#fav-email').click(function() {
       $('#fav-form').toggleClass('hide-show')
   });

})