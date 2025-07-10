let btn=document.getElementById("btn");
let navbar=document.getElementById("navbar");

function setRealHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--real-vh', `${vh}px`);
}
setRealHeight();
window.addEventListener('resize', setRealHeight);

// alert("website ini dibuat mobile first!, untuk dekstop dikemudian hari")
btn.addEventListener("click", function() {
    if(navbar.style.display==="none"){
        navbar.style.display="flex"
    }
    else{
        navbar.style.display="none"
    }
})
