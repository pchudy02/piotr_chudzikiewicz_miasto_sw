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