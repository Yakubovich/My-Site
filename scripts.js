$(document).ready(function(){

  $("li").fadeTo("fast", 0.8);

  $("li").hover(
    function(event){
      $(this).fadeTo("fast", 1);
    },
    function(event){
      $(this).fadeTo("fast", 0.8);
    }
  );

  if ($("html").width()	> 850 && $("html").height() > 800) {
    $("a[rel='example1']").colorbox();
    $("a[rel='geni']").colorbox();
    $(".youtube").colorbox({iframe:true, innerWidth:600, innerHeight:344});
  }

});
