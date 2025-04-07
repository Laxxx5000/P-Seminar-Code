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

function goToRandomPage() {
    // Liste deiner Subpages
    const subpages = [
      'Essen/asia.html',
      'Essen/bavarian.html',
      'Essen/imbiss.html',
      'Essen/italian.html',
      'Freizeit und Kultur/culture.html',
      'Freizeit und Kultur/freizeit.html',
      'Shopping/clothing.html',
      'Shopping/creative.html',
      'Shopping/drugs.html',
      'Shopping/sanity.html'
    ];
  
    // Wähle eine zufällige Seite
    const randomIndex = Math.floor(Math.random() * subpages.length);
    const selectedPage = subpages[randomIndex];
  
    // Weiterleitung
    window.location.href = selectedPage;
  }
  