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
        const containers = document.querySelectorAll('.container');

        containers.forEach(container => {
            const link = container.querySelector('a'); // Der Link um den Button

            // Anfangs alle Links deaktivieren
            link.style.pointerEvents = 'none';

            container.addEventListener('touchstart', function (event) {
                event.preventDefault(); // Verhindert unerwartete Touch-Events

                // Alle Links auf der Seite deaktivieren
                document.querySelectorAll('.container a').forEach(a => {
                    a.style.pointerEvents = 'none';
                });

                // Warten bis Finger gehoben wurde (touchend)
                container.addEventListener('touchend', function () {
                    setTimeout(() => {
                        link.style.pointerEvents = 'auto'; // Link aktivieren
                    }, 50); // Minimale Verzögerung für sicheres Aktivieren
                }, { once: true }); // touchend nur einmal pro Aktivierung
            });
        });
    }

    handleButtonActivation();
});

