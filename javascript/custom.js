jQuerOs(document).ready(function () {

  //if (jQuerOs("[rel=tooltip]").length) {jQuerOs("[rel=tooltip]").tooltip();}
 // jQuerOs('button').addClass('btn');
// ____________________________________________________________________________________________ resize display

        // var myWidth = 0;
        // myWidth = window.innerWidth;
        // jQuerOs('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:999;color:#fff;">Width = '+myWidth+'</div>');
        // jQuerOs(window).resize(function(){
        //     var myWidth = 0;
        //     myWidth = window.innerWidth;
        //     jQuerOs('#size').remove();
        //     jQuerOs('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:999;color:#fff;">Width = '+myWidth+'</div>');
        // });

jQuerOs('.itp-subscribesubscribeFooter form input.inputbox').attr('placeholder',' your_email_here@gmail.com');

// ____________________________________________________________________________________________
 
    jQuerOs('.icon-calendar').removeClass('icon-calendar').addClass('fa fa-calendar');
    jQuerOs('.icon-arrow-left').removeClass('icon-arrow-left icon-white').addClass('fa fa-arrow-left');
 // ____________________________________________________________________________________________footer

  var wrapheight = jQuerOs(window).outerHeight() - jQuerOs(".header").outerHeight(true) - jQuerOs("#footer").outerHeight(true);
  jQuerOs("#wrapper").css("min-height" , wrapheight);


  jQuerOs(".userdata div h2, #com-form-login+h2,.vm-orders-list>h1").replaceWith(function(index, oldHTML){
  return jQuerOs("<h3>").html(oldHTML);
  });

  jQuerOs("#com-form-login").prev("h1").replaceWith(function(index, oldHTML){
  return jQuerOs("<h3>").html(oldHTML);
  });

  jQuerOs(".order-view>h2, .userdata div h3").replaceWith(function(index, oldHTML){
  return jQuerOs("<h4>").html(oldHTML);
  });


// __________________________________________________________________________________________________________


    jQuerOs('.top_menu button.navbar-toggle').click(function() {
        if (jQuerOs('.top_menu #top-navbar-collapse').hasClass("in")) {
            jQuerOs('.top_menu button.navbar-toggle i').addClass('fa-bars');
           jQuerOs('.top_menu button.navbar-toggle i').removeClass('fa-times');
        } else {
            jQuerOs('.top_menu button.navbar-toggle i').removeClass('fa-bars');
            jQuerOs('.top_menu button.navbar-toggle i').addClass('fa-times');
        }
    });


    jQuerOs('.main_menu button.navbar-toggle').click(function() {
        if (jQuerOs('.main_menu #main-navbar-collapse').hasClass("in")) {
            jQuerOs('.main_menu button.navbar-toggle i').addClass('fa-bars');
           jQuerOs('.main_menu button.navbar-toggle i').removeClass('fa-times');
        } else {
            jQuerOs('.main_menu button.navbar-toggle i').removeClass('fa-bars');
            jQuerOs('.main_menu button.navbar-toggle i').addClass('fa-times');
        }
    });


    jQuerOs('.footer_menu button.navbar-toggle').click(function() {
        if (jQuerOs('.footer_menu #footer-navbar-collapse').hasClass("in")) {
            jQuerOs('.footer_menu button.navbar-toggle i').addClass('fa-bars');
           jQuerOs('.footer_menu button.navbar-toggle i').removeClass('fa-times');
        } else {
            jQuerOs('.footer_menu button.navbar-toggle i').removeClass('fa-bars');
            jQuerOs('.footer_menu button.navbar-toggle i').addClass('fa-times');
        }
    });




// _____________________________________________________________________________________________ footer to bottom
function footerToBottom() {
     var browserHeight = jQuerOs(window).height(),
          footerOuterHeight = jQuerOs('.footer').outerHeight(true),
          mainHeightMarginPaddingBorder = jQuerOs('#wrapper').outerHeight(true) - jQuerOs('#wrapper').height() + 3;
          jQuerOs('#wrapper').css({
               'min-height': browserHeight - footerOuterHeight - mainHeightMarginPaddingBorder,
          });
     };
     footerToBottom();
     jQuerOs(window).resize(function () {
     footerToBottom();
});

 });



jQuerOs(document).ready(function(){

  var mainMenu = jQuerOs('#site-navigation-main ul.nav');
  mainMenu.find('li.parent > a').next('ul').hide();
  mainMenu.find('li.parent > a').append('<span class="arrow"></span>');
  mainMenu.find('li.parent > span.separator').next('ul').hide();
  mainMenu.find('li.parent > span.separator').append('<span class="arrow"></span>');
  mainMenu.find('li.parent > .nav-header').next('ul').hide();
  mainMenu.find('li.parent > .nav-header').append('<span class="arrow"></span>');

    jQuerOs(function() {

    mainMenu.find('li.parent').hover(function() {

        if (!jQuerOs(this).children('ul').is(':visible')) {
    jQuerOs(this).children('ul').stop().slideDown(50);
      }
    },
    function() {
        if (jQuerOs(this).children('ul').is(':visible')) {
      jQuerOs(this).children('ul').slideUp(50);
    }
      });
    });;
});
