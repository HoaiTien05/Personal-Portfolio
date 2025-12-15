// Function để load HTML components
function loadComponent(componentId, filePath) {
  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(componentId).innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading component:", error);
      document.getElementById(componentId).innerHTML =
        "<p>Không thể tải nội dung. Vui lòng thử lại sau.</p>";
    });
}

// Load tất cả components khi trang web load xong
document.addEventListener("DOMContentLoaded", function () {
  loadComponent("header-component", "components/header.html");
  loadComponent("hero-component", "components/hero.html");
  loadComponent("about-component", "components/about.html");
  loadComponent("skills-component", "components/skills.html");
  loadComponent("projects-component", "components/projects.html");
  loadComponent("contact-component", "components/contact.html");
  loadComponent("footer-component", "components/footer.html");
});
