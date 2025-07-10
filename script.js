let btn=document.getElementById("btn");
let navbar=document.getElementById("navbar");

// alert("website ini dibuat mobile first!, untuk dekstop dikemudian hari")
btn.addEventListener("click", function() {
    if(navbar.style.display==="none"){
        navbar.style.display="flex"
    }
    else{
        navbar.style.display="none"
    }
})