fetch("data/certificates.json")
  .then(response => response.json())
  .then(data => {

    const container =
      document.getElementById("certificate-container");

    data.forEach(cert => {

      container.innerHTML += `
        <div class="card">
          <img src="${cert.image}" width="300">
          <h2>${cert.title}</h2>
          <p><b>Issuer:</b> ${cert.issuer}</p>
          <p><b>Date:</b> ${cert.date}</p>
          <p>${cert.description}</p>
        </div>
      `;

    });

  });   