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
                event.preventDefault(); // Verhindert Standard-Touch-Aktionen
                
                // Deaktiviere kurzzeitig alle Interaktionen
                document.body.style.pointerEvents = 'none';

                // Aktiviere den Button im aktuellen Container
                button.removeAttribute('disabled');
                button.style.cursor = 'pointer';

                // Nach 300ms alles wieder aktivieren
                setTimeout(() => {
                    document.body.style.pointerEvents = 'auto';
                }, 300);
            });

            container.addEventListener('mouseenter', function () {
                button.removeAttribute('disabled');
                button.style.cursor = 'pointer';
            });

            container.addEventListener('mouseleave', function () {
                button.setAttribute('disabled', 'true');
                button.style.cursor = 'not-allowed';
            });
        });
    }

    handleButtonActivation();
});
