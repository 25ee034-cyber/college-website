const username = window.location.hostname.split(".")[0]; // 🔴 GitHub username

const container = document.getElementById("projects-container");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(data => {
    container.innerHTML = "";

    data.forEach(repo => {
      if (repo.fork) return; // forked repos skip

      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description provided."}</p>

        <div class="project-links">
          <a href="${repo.html_url}" target="_blank">GitHub</a>
          ${
            repo.homepage
              ? `<a href="${repo.homepage}" target="_blank">Live Demo</a>`
              : ""
          }
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(() => {
    container.innerHTML = "<p>Failed to load projects.</p>";
  });
