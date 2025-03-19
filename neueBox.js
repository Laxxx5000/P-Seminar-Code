function toggleBox() {
    const box = document.getElementById("toggleBox");
    const content = document.getElementById("content");
    const arrow = document.getElementById("arrow");
    
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        box.classList.add("expanded");
        arrow.classList.add("rotated");
    } else {
        content.style.display = "none";
        box.classList.remove("expanded");
        arrow.classList.remove("rotated");
    }
}