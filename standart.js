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
            const link = container.querySelector('a'); // Der Link im Container

            // Anfangs alle Links unsichtbar machen
            link.style.display = 'none';

            container.addEventListener('touchstart', function (event) {
                event.preventDefault(); // Verhindert unerwünschte Klicks oder Scrollen

                // Alle Links auf der Seite verstecken
                document.querySelectorAll('.container a').forEach(a => {
                    a.style.display = 'none';
                });

                // Nach Touch-Ende den Link sichtbar machen
                container.addEventListener('touchend', function () {
                    setTimeout(() => {
                        link.style.display = 'block'; // Link wird erst nach 500ms sichtbar
                    }, 500); // Kleine Verzögerung für sicheres Aktivieren
                }, { once: true });
            });
        });
    }

    handleButtonActivation();
});
