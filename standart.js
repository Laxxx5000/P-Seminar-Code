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
        
        // Für jedes Container-Element einen Event-Listener hinzufügen
        containers.forEach(container => {
            const button = container.querySelector('.buttonInCard');
            let isDivTouched = false;  // Flag um Touch zu erkennen


            // Aktivieren des Buttons beim Tap auf dem Container (für Touchscreen)
            container.addEventListener('touchstart', function() {
                isDivTouched = true;
                button.removeAttribute('disabled');
                button.style.cursor = 'pointer';  // Setzt den Hand-Cursor
            });

            // Zurücksetzen des Status, wenn der Benutzer ein anderes Element tippt
            document.addEventListener('touchstart', function(event) {
                if (!event.target.closest('.container')) {
                    button.setAttribute('disabled', 'true');
                    button.style.cursor = 'not-allowed';  // Setzt den Cursor auf nicht erlaubt
                    isDivTouched = false;
                }
            });

            // Deaktivieren des Buttons, wenn ein anderes Container-Element angeklickt wird
            container.addEventListener('click', function() {
                // Alle anderen Container deaktivieren ihren Button
                containers.forEach(otherContainer => {
                    if (otherContainer !== container) {
                        const otherButton = otherContainer.querySelector('.button');
                        otherButton.setAttribute('disabled', 'true');
                        otherButton.style.cursor = 'not-allowed';  // Setzt den Cursor auf nicht erlaubt
                    }
                });
            });
        });
    }

    // Funktion aufrufen, wenn die Seite geladen ist
    handleButtonActivation();
});
