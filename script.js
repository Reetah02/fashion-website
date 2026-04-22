function darkenRoom() {
    // Fade to black and gold
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "#D4AF37";
    
    alert("MIDNIGHT MODE ACTIVATED.");
}

function resetLights() {
    // Reloads the page to original YSL format
    location.reload();
}