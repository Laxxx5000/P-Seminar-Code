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
      'Essen/de/asia(de).html',
      'Essen/de/backer(de).html',
      'Essen/de/bayres(de).html',
      'Essen/de/doener(de).html',
      'Essen/de/coffee(de).html',
      'Essen/de/italian(de).html',
      'Shopping/de/clothing.html',
      'Shopping/de/creative.html',
      'Shopping/de/drugs.html',
      'Shopping/de/HEP.html',
      'Freizeit und Kultur/de/kirchen.html',
      'Freizeit und Kultur/de/Freizeitanlage.html',
      'Freizeit und Kultur/de/KZentrum',
      'Freizeit und Kultur/de/spielplatz.html'
    ];
  
    // Wähle eine zufällige Seite
    const randomIndex = Math.floor(Math.random() * subpages.length);
    const selectedPage = subpages[randomIndex];
  
    // Weiterleitung
    window.location.href = selectedPage;
  }
  

function goToRandomPageEN() {
    // Liste deiner Subpages
    const subpages = [
      'Essen/en/asia(en).html',
      'Essen/en/backer(en).html',
      'Essen/en/italian(en).html',
      'Essen/en/bayres(en).html',
      'Essen/en/coffee(en).html',
      'Essen/en/doener(en).html',
      'Shopping/en/clothing.html',
      'Shopping/en/creative.html',
      'Shopping/en/drugs.html',
      'Shopping/en/HEP.html',
      'Freizeit und Kultur/en/church.html',
      'Freizeit und Kultur/en/freetime.html',
      'Freizeit und Kultur/en/Ccenter.html',
      'Freizeit und Kultur/en/Playgrounds.html'
    ];
  
    // Wähle eine zufällige Seite
    const randomIndex = Math.floor(Math.random() * subpages.length);
    const selectedPage = subpages[randomIndex];
  
    // Weiterleitung
    window.location.href = selectedPage;
  }
  