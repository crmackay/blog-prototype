function toggleMenu(){
    document.getElementById("sidebar").classList.toggle("visible");
    document.getElementById("menuBtn").classList.toggle("rotate");
}

document.getElementById("menuBtn").addEventListener("click", toggleMenu);

