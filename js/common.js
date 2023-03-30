//modal//


$(function(){
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
$('body').css('overflow-y', 'scroll');

            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
$('body').css('overflow-y','auto');
        $('.js-modal').fadeOut();
        return false;
    });
});
//scroll//
$(function(){
  $('a[href^="#"]').click(function(){
var adjust = 0;
var speed = 400;
var href= $(this).attr("href");
var target = $(href == "#" || href == "" ? 'html' : href);
var position = target.offset().top + adjust;
$('body,html').animate({scrollTop:position}, speed, 'swing');
return false;
  });
});

//$(function(){
  //$('a[href^="#"]').click(function(){
    //var adjust = 0;
    //var speed = 400;
    //var href= $(this).attr("href");
  //  var target = $(href == "#" || href == "" ? 'html' : href);
    //var position = target.offset().top + adjust;
  //  $('body,html').animate({scrollTop:position}, speed, 'swing');
    //return false;
  //});//


////lightbox//
//<script>
  //  lightbox.option({
    //  'resizeDuration': 200,
      //'wrapAround': true
    //})
//</script>
