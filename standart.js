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
//Das Problem wird mit folgendem -hoffentlich- behoben. Bin zu faul für eine extra Java-Script-Datei.
document.querySelectorAll('.card').forEach(box => {
    const button = box.querySelector('button');
  
    box.addEventListener('transitionend', function (event) {
      if (event.propertyName === 'transform') {
        if (box.matches(':hover')) {
          console.log('Transition abgeschlossen. Button aktiv!');
          button.disabled = false;
        } else {
          console.log('Transition zurückgesetzt. Button deaktiviert!');
          button.disabled = true;
        }
      }
    });
  });
  