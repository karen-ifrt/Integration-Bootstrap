
mybutton = document.getElementById("myBtn");

window.addEventListener("scroll", function(){
  if (document.documentElement.scrollTop > 200) {
    mybutton.style.bottom = "30px";

  } else {
    mybutton.style.bottom = "-100px";
  }
});

function topFunction() {
    $("html").animate({ scrollTop: "0" }, "600");
}


