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
});
