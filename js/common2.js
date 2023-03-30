
//const comments = {
//  injury02: "This is image 1",
//  image2: "This is image 2",
//  image3: "This is image 3"
//};

//document.querySelectorAll("svg").forEach(svg => {
  //svg.addEventListener("click", event => {
    //const id = event.target.id;
    //const comment = comments[id];
  //alert(comment);

  //});
//});
const svg1 = document.getElementById("svg1");
const svg2 = document.getElementById("svg2");

svg1.addEventListener("click", function() {
  showComment("This is SVG1.");
});

svg2.addEventListener("click", function() {
  showComment("This is SVG2.");
});

function showComment(comment) {
  // 既存のコメントがあれば削除する
  const existingComment = document.getElementById("comment");
  if (existingComment) {
    existingComment.remove();
  }

  // 新しいコメントを作成し、SVG要素に追加する
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("x", "50");
  text.setAttribute("y", "80");
  text.setAttribute("fill", "black");
  text.setAttribute("font-size", "16px");
  text.setAttribute("id", "comment");
  text.textContent = comment;

  const svg = event.currentTarget;
  svg.appendChild(text);
}
//ここから
const button = document.getElementById("injury02");
const text = document.getElementById("myText");
button.addEventListener("click", function() {
if (text.style.display === "none") {
  text.style.display = "block";
} else {
    text.style.display = "none";
  }
});
//ここまで

//modal//


//$(function(){
    //$('.js-modal-open').each(function(){
        //$(this).on('click',function(){
//$('body').css('overflow-y', 'scroll');

            //var target = $(this).data('target');
            //var modal = document.getElementById(target);
            //$(modal).fadeIn();
          //  return false;
        //});
  //  });
  //  $('.js-modal-close').on('click',function(){
//$('body').css('overflow-y','auto');
        //$('.js-modal').fadeOut();
        //return false;
    //});
//});
//scroll//
//$(function(){
  //$('a[href^="#"]').click(function(){
//////var href= $(this).attr("href");
//////  //});
//
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
