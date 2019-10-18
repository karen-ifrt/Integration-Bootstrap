mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

window.addEventListener("scroll", function(){
  scrollFunction();
});

function topFunction() {
    $("html").animate({ scrollTop: "0" }, "600");
}

