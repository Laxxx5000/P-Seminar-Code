function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
    if (sidebar.classList.contains("open")) {
        document.addEventListener("click", handleOutsideClick);
    } else {
        document.removeEventListener("click", handleOutsideClick);
    }
}

function handleOutsideClick(event) {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.querySelector(".menu-icon");
    
    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.classList.remove("open");
        document.removeEventListener("click", handleOutsideClick);
    }
}

function setup() { document.getElementById("loading").remove();
}

//Am Handy kann man die Buttons in den Cards drücken, obwohl man nicht vorher auf die Card gedrückt/gehovered hat.
//Das Problem wird mit folgendem -hoffentlich- behoben. Bin zu faul für eine extra Datei.
function initHoverButton() {
    const container = document.getElementById('card');
    const button = document.getElementById('buttoninCard');

    if (!container || !button) return;

    container.addEventListener('mouseenter', () => {
        button.removeAttribute('disabled');
    });

    container.addEventListener('mouseleave', () => {
        button.setAttribute('disabled', 'true');
    });
}

// Funktion nach dem Laden der Seite aufrufen
document.addEventListener('DOMContentLoaded', initHoverButton);
