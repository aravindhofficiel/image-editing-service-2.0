document.addEventListener('DOMContentLoaded', () => {
    const menuTrigger = document.getElementById('menuTrigger');
    const menuClose = document.getElementById('menuClose');
    const navLinks = document.getElementById('navLinks');
    const navOverlay = document.getElementById('navOverlay');
    const body = document.body;
    const navItems = document.querySelectorAll('.nav-item');

    // Function to toggle menu
    const toggleMenu = (state) => {
        if (state === 'open') {
            navLinks.classList.add('active');
            navOverlay.classList.add('active');
            body.classList.add('menu-open');
        } else {
            navLinks.classList.remove('active');
            navOverlay.classList.remove('active');
            body.classList.remove('menu-open');
        }
    };

    // Open Menu
    menuTrigger.addEventListener('click', () => toggleMenu('open'));

    // Close Menu (via X button)
    menuClose.addEventListener('click', () => toggleMenu('close'));

    // Close Menu (via clicking the background overlay)
    navOverlay.addEventListener('click', () => toggleMenu('close'));

    // Close Menu (via clicking a menu link)
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Only trigger on mobile view
            if (window.innerWidth <= 768) {
                toggleMenu('close');
            }
        });
    });

    // Close on ESC key for accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') toggleMenu('close');
    });
});


document.addEventListener("DOMContentLoaded", () => {
  fetch("/components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(err => console.error("Footer load error:", err));
});


// hero section js//

