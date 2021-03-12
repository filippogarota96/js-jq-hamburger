var menu = $(".header-right > a");
var list = $(".hamburger-menu");
var closeMenu = $(".close");
// apre il menu
menu.click(
  function(){
    list.addClass('active');

  }
);
// chiude il menu
closeMenu.click(
  function(){
    list.removeClass('active');
  }
);
