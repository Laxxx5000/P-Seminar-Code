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
document.addEventListener('DOMContentLoaded', function() {

    function handleButtonActivation() {
        const containers = document.querySelectorAll('.card');

        // Event-Listener für jedes Container-Element
        containers.forEach(container => {
            const button = container.querySelector('.buttonInCard');
            let isDivTouched = false;  // Flag um Touch zu erkennen

            // Aktivieren des Buttons beim Hover über den Container
            container.addEventListener('mouseenter', function() {
                // Den Hover nur aktivieren, wenn der Touch nicht aktiv ist
                if (!isDivTouched) {
                    button.removeAttribute('disabled');
                    button.style.cursor = 'pointer';  // Setzt den Hand-Cursor
                }
            });

            // Deaktivieren des Buttons, wenn der Hover endet
            container.addEventListener('mouseleave', function() {
                if (!isDivTouched) {
                    button.setAttribute('disabled', 'true');
                    button.style.cursor = 'not-allowed';  // Setzt den Cursor auf nicht erlaubt
                }
            });

            // Aktivieren des Buttons nach dem Ende des Touch-Events
            container.addEventListener('touchend', function() {
                isDivTouched = true; // Markiert, dass ein Touch stattgefunden hat
                button.removeAttribute('disabled');
                button.style.cursor = 'pointer';  // Setzt den Hand-Cursor
            });

            // Deaktivieren des Buttons von allen anderen Containern, wenn auf diesen Container geklickt wird
            container.addEventListener('click', function() {
                // Alle Container durchlaufen und den Button deaktivieren, außer den aktuellen
                containers.forEach(otherContainer => {
                    const otherButton = otherContainer.querySelector('.buttonInCard');
                    if (otherContainer !== container) {
                        otherButton.setAttribute('disabled', 'true');
                        otherButton.style.cursor = 'not-allowed';  // Setzt den Cursor auf nicht erlaubt
                    }
                });

                // Den Button des geklickten Containers aktivieren
                button.removeAttribute('disabled');
                button.style.cursor = 'pointer';  // Setzt den Hand-Cursor
            });
        });
    }

    // Funktion aufrufen, wenn die Seite geladen ist
    handleButtonActivation();
});
