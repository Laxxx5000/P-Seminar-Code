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
function toggleBox2() {
    const box = document.getElementById("toggleBox2");
    const content = document.getElementById("content2");
    const arrow = document.getElementById("arrow2");
    
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
function toggleBox3() {
    const box = document.getElementById("toggleBox3");
    const content = document.getElementById("content3");
    const arrow = document.getElementById("arrow3");
    
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