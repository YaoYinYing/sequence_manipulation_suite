// scripts/sidebar_loader.js

// Function to load the sidebar/navigation dynamically
function loadSidebar(navPath = 'nav.html', placeholderId = 'nav-placeholder') {
    fetch(navPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        // Inject nav content
        const navContainer = document.getElementById(placeholderId);
        if (navContainer) {
          navContainer.innerHTML = data;
  
          // Highlight current page link
          const currentPage = location.pathname.split('/').pop();
          const links = navContainer.querySelectorAll('a');
  
          links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
              link.style.fontWeight = 'bold';
              link.style.color = '#FF0000'; // Customize highlight color
            }
          });
        } else {
          console.error(`Element with id '${placeholderId}' not found.`);
        }
      })
      .catch(error => {
        console.error('Sidebar failed to load:', error);
      });
  }
  
  // Immediately invoke when script loads
  document.addEventListener('DOMContentLoaded', () => loadSidebar());
  