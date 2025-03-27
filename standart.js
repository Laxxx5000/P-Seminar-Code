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
document.addEventListener('DOMContentLoaded', function () {
    function handleButtonActivation() {
        const containers = document.querySelectorAll('.card');

        containers.forEach(container => {
            const button = container.querySelector('.buttonInCard');
            container.addEventListener('touchstart', function (event) {
                event.preventDefault(); // Standard-Touch-Aktionen verhindern
                
                // Blockiere nur Klicks, aber nicht CSS-Animationen
                document.body.style.userSelect = 'none'; // Kein Text markieren
                document.body.style.pointerEvents = 'auto'; // Animationen bleiben aktiv

                // Aktiviere den Button im aktuellen Container
                button.removeAttribute('disabled');
                button.style.cursor = 'pointer';

                // Nach 300ms Klicks wieder aktivieren
                setTimeout(() => {
                    document.body.style.userSelect = 'auto';
                }, 300);
            });
        });
    }

    handleButtonActivation();
});
