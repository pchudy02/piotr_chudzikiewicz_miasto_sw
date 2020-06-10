function openNav() {
    document.getElementById("myUpnav").style.height = "200px";
    document.getElementById("main").style.marginTop = "200px";
}

function closeNav() {
    document.getElementById("myUpnav").style.height = "0";
    document.getElementById("main").style.marginTop = "0";
}

var x = 0;
function ankieta()  {
        if(x==0)
        {
            var sending = confirm("Czy napewno chcesz przesłać nam swoją ankietę?");
            if(sending == true)
            {
                var wysylanie = alert("Twoja ankieta została przesłana ;P");
                x = x+1;
            }
            else
            {
                var niewysylanie = alert("Czemu nie chcesz przesłać nam swojej ankiety?!");
            }
        }
        else
        {
            var wyslana = alert("Wysłałeś nam już ankietę :D");
        }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}