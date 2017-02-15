function setCockie () {
  document.cookie = "logged_in=yes";
}
var getCockie = function () {
  return document.cookie;
}

/* ---- popup video ---- */
$(document).ready(function() {

  if (getCockie() === "") {
      document.getElementById("preloader").style.display = "block";
  }

  else {
      document.getElementById("preloader").style.display = "none";
  }

  setTimeout(function(){
      $('#preloader').fadeOut(500);
      setCockie();
  },3000);

});
