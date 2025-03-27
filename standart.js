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
    let isDivTouched = false; // Flag, um zu überprüfen, ob das Div aktiviert wurde

    // Alle anderen Container und Buttons
    for (let container of containers) {
        const button = container.getElementsByClassName('button')[0]; // Button im aktuellen Container holen

        if (!button) continue; // Falls kein Button im Container ist, überspringen

        // Touchstart für das div
        container.addEventListener('touchstart', () => {
            if (!isDivTouched) {
                // Div aktivieren
                button.removeAttribute('disabled');
                isDivTouched = true; // Div wurde jetzt aktiviert
            }
        });

        // Touchstart für den Button
        button.addEventListener('touchstart', () => {
            if (isDivTouched) {
                // Button funktioniert nur, wenn Div aktiv ist
                alert("Button funktioniert jetzt!");
            }
        });
    }

    // Touchstart für andere Elemente, um den Status zurückzusetzen
    document.addEventListener('touchstart', (event) => {
        // Überprüfen, ob das Element, das berührt wurde, nicht ein Container ist
        if (!event.target.closest('.container')) {
            isDivTouched = false; // Status zurücksetzen
            // Alle Buttons wieder deaktivieren
            const allButtons = document.getElementsByClassName('button');
            for (let button of allButtons) {
                button.setAttribute('disabled', 'true');
            }
        }
    });
}

// Funktion nach dem Laden der Seite aufrufen
document.addEventListener('DOMContentLoaded', initHoverButtons);
