function myFunction (corgi){
    var xp2 = 0
    //const corgi = document.getElementById("image")
    jQuery(document).ready(function() {

        var mouseX = 0, mouseY = 0;
        var xp = 0, yp = 0;

        $(document).mousemove(function(e){
            mouseX = e.pageX - 30;
            mouseY = e.pageY - 30; 
        });
        corgi.classList.add("unflip")
        setInterval(function(){
            xp += ((mouseX - xp)/20);
            yp += ((mouseY - yp)/20);
            if(xp > xp2){
                $("#image").css({
                    left: xp +'px',
                    top: yp +'px'
                });
                corgi.classList.remove("unflip")
                corgi.classList.add("flip");
            } else if(xp2 > xp){
                $("#image").css({
                    left: xp +'px',
                    top: yp +'px'
                });
                corgi.classList.remove("flip")
                corgi.classList.add("unflip");
            }
            xp2 = xp
            //$("#image").css({left: xp +'px', top: yp +'px'});
        }, 20);
    });
}
function toggleCorgis (){
    const corgielement = document.getElementById("image")
    if(corgielement.src === "file:///Users/JustinBuck2022/Desktop/code1/corgi1.gif"){
        corgielement.src = "file:///Users/JustinBuck2022/Desktop/code1/corgi2.gif"
    } else if(corgielement.src === "file:///Users/JustinBuck2022/Desktop/code1/corgi2.gif"){
        corgielement.src = "file:///Users/JustinBuck2022/Desktop/code1/corgi3.gif"
    } else if(corgielement.src === "file:///Users/JustinBuck2022/Desktop/code1/corgi3.gif"){
        corgielement.src = "file:///Users/JustinBuck2022/Desktop/code1/corgi1.gif"
    }
}