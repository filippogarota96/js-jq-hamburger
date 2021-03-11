var menu = $(".fa-bars");
var list = $(".hamburger-menu");
var closeMenu = $(".close");
// apre il menu
menu.click(
  function(){
    list.fadeIn('slow');
  }
);
// chiude il menu
closeMenu.click(
  function(){
    list.fadeOut('slow');
  }
);
