$(document).ready(function(){

  $("li").fadeTo("fast", 0.6);

  $("li").hover(
    function(event){
      $(this).fadeTo("fast", 1);
    },
    function(event){
      $(this).fadeTo("fast", 0.6);
    }
  );
});
