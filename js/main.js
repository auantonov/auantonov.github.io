

/* ---- contact form ---- */
// $("#contactForm").validator().on("submit", function(event) {
//     if (event.isDefaultPrevented()) {
//         formError();
//         submitMSG(false, "Did you fill in the form properly?");
//     } else {
//         event.preventDefault();
//         submitForm();
//     }
// });
//
// alert(window.localStorage.myethaddress);


$('.navbar-toggle').unbind('click');
$('.collapse').unbind('click');

$('.menu-icon').click(function() {
  $('.overlay').addClass('visible');
  $('.menu-wrapper').addClass('transform');
});

$('.closed').click(function() {
  $('.overlay').removeClass('visible');
  $('.menu-wrapper').removeClass('transform');
});

$('.overlay').click(function() {
  $('.overlay').removeClass('visible');
  $('.menu-wrapper').removeClass('transform');
});

function submitForm() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    $.ajax({
        type: "POST",
        url: "php/contact.php",
        data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject +
            "&message=" + message,
        success: function(text) {
            if (text == "success") {
                formSuccess();
            } else {
                formError();
                submitMSG(false, text);
            }
        }
    });
}



function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError() {
    $("#contactForm").removeClass().addClass('shake animated').one(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function() {
            $(this).removeClass();
        });
}

function submitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h4 text-success";
    } else {
        var msgClasses = "h4 text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

/* ---- nav smooth scroll ---- */
$(document).ready(function() {

    $('body').addClass('opacity-in');

    $('.scroll-link').on('click', function(event) {
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
    });
    $('.scroll-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1200);
    });

$(document).ready(function(){



    $("#email").focusout(function() {

        var email = $("#email").val();

        if (email != 0) {
            if (isValidEmailAddress(email)) {
                $("#email").css({"border": "2px solid #9ad085"});
                $('#email').addClass('validate-data');
            } else {
                $("#email").css({"border": "2px solid #F44336"});
            }
        } else {
            $("#email").css({"border": "2px solid #474747"});
        }

    });

    $("#telefon").focusout(function() {
      var telefon = $('#telefon').val();

      if (telefon != 0) {
          if (isValidTelefon(telefon)) {
              $("#telefon").css({"border": "2px solid #9ad085"});
              $("#telefon").addClass('validate-data');
          } else {
              $("#telefon").css({"border": "2px solid #F44336"});
          }
      } else {
          $("#telefon").css({"border": "2px solid #474747"});
      }
    });

    $("#in-name").focusout(function() {

      var name = $('#in-name').val();
      if (name != 0) {
          if (isValidName(name)) {
              $("#in-name").css({"border": "2px solid #9ad085"});
              $("#in-name").addClass('validate-data');
          } else {
              $("#in-name").css({"border": "2px solid #F44336"});
          }
      } else {
          $("#in-name").css({"border": "2px solid #474747"});
      }
    });

    $("#in-lastname").focusout(function() {

      var name = $('#in-lastname').val();
      if (name != 0) {
          if (isValidName(name)) {
              $("#in-lastname").css({"border": "2px solid #9ad085"});
              $("#in-lastname").addClass('validate-data');
          } else {
              $("#in-lastname").css({"border": "2px solid #F44336"});
          }
      } else {
          $("#in-lastname").css({"border": "2px solid #474747"});
      }
    });


    $("#pass1").focusout(function() {

      var pass = $('#pass1').val();

      if (pass != 0) {
          if (isValidPassword(pass)) {
              $("#pass1").css({"border": "2px solid #9ad085"});
              $("#pass1").addClass('validate-data');
          } else {
              $("#pass1").css({"border": "2px solid #F44336"});
          }
      } else {
          $("#pass1").css({"border": "2px solid #474747"});
      }
    });

});

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

function isValidTelefon(telefon) {
    var pattern = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
    return pattern.test(telefon);
}

function isValidName(name) {
    var pattern = new RegExp(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/);
    return pattern.test(name);
}

function isValidPassword(pass) {
    var pattern = new RegExp(/^[0-9a-zA-Z\-\_]+$/);
    return pattern.test(pass);
}



});


/* ---- navbar offset ---- */
function scrollToID(id, speed) {
    var offSet = 69;
    var targetOffset = $(id).offset().top - offSet;
    $('html,body').animate({
        scrollTop: targetOffset
    }, speed);
}

/* ---- navbar adjust on scroll ---- */
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 70) {
        $('.navbar').addClass('navbar-switch')
    } else {
        $('.navbar').removeClass('navbar-switch')
    }
});


/* ---- animations ---- */
// if (typeof sr == 'undefined') {
//     window.sr = ScrollReveal({
//         duration: 1600,
//         delay: 50
//     });
// }
// window.onload(function () {
//   alert('1');
// })



function triggerReveals() {
    sr.reveal('.bottomReveal', {
        origin: 'bottom'
    }).reveal('.leftReveal', {
        origin: 'left'
    }).reveal('.rightReveal', {
        origin: 'right'
    }).reveal('.topReveal', {
        origin: 'top'
    });

    sr.reveal('.rotateBottomReveal', {
        origin: 'bottom',
        rotate: { x: 90 }
    }).reveal('.rotateLeftReveal', {
        origin: 'left',
        rotate: { x: 90 }
    }).reveal('.rotateRightReveal', {
        origin: 'right',
        rotate: { x: 90 }
    }).reveal('.rotateTopReveal', {
        origin: 'top',
        rotate: { x: 90 }
    })

    sr.reveal('.scaleReveal', {
        origin: 'top',
        scale: 0.6
    });
}

/* ---- close mobile nav on click ---- */
// $(document).on('click','.navbar-collapse.in',function(e) {
//     if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
//         $(this).collapse('hide');
//     }
// });

/* ---- rotater text ---- */
var current = 1;
var height = jQuery('.ticker').height();
var numberDivs = jQuery('.ticker').children().length;
var first = jQuery('.ticker h2:nth-child(1)');
setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 2500);

/* ---- nav main link hover dropdown ---- */
// if ( $(window).width() >= 767) {
//     $('.dropdown').hover(function(){
//         $('.dropdown-toggle', this).trigger('click');
//     });
// }
