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
function initHoverButtons() {
    const containers = document.getElementsByClassName('container'); // Alle Container holen
    
    for (let container of containers) {
        const button = container.getElementsByClassName('button')[0]; // Button im aktuellen Container holen

        if (!button) continue; // Falls kein Button im Container ist, überspringen

        container.addEventListener('mouseenter', () => {
            button.removeAttribute('disabled'); // Button aktivieren
        });

        container.addEventListener('mouseleave', () => {
            button.setAttribute('disabled', 'true'); // Button deaktivieren
        });
    }
}

// Funktion nach dem Laden der Seite aufrufen
document.addEventListener('DOMContentLoaded', initHoverButtons);

