fetch("data/certificates.json")
.then(response => response.json())
.then(data => {

    const container =
    document.getElementById("certificate-container");

    data.forEach(cert => {

        container.innerHTML += `
        
        <div class="card">

            <img src="${cert.image}" alt="${cert.title}">

            <div class="card-content">

                <h2>${cert.title}</h2>

                <p class="issuer">
                    ${cert.issuer}
                </p>

                <p class="date">
                    ${cert.date}
                </p>

                <p class="description">
                    ${cert.description}
                </p>

                <a
                href="${cert.image}"
                target="_blank"
                class="view-btn">
                View Certificate
                </a>

            </div>

        </div>

        `;
    });

    document.getElementById("totalCertificates")
    .textContent = data.length;

    const issuers =
    [...new Set(data.map(cert => cert.issuer))];

    document.getElementById("totalIssuers")
    .textContent = issuers.length;

    const latest =
    data[data.length - 1];

    if(latest){

        document.getElementById("latestYear")
        .textContent =
        new Date(latest.date)
        .getFullYear();

    }

})
.catch(error => {

    console.log(error);

});