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
                <button
class="story-btn"
onclick='showStory(${JSON.stringify(cert.story)})'>
📖 Read My Story
</button>
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
function showStory(story){

    document.getElementById("storyTitle").innerHTML =
    "📖 My Learning Story";

    document.getElementById("storyText").innerHTML =

    `
    <h3>🎯 Why I Joined</h3>
    <p>${story.why}</p>

    <h3>📚 What I Learned</h3>
    <p>${story.learned}</p>

    <h3>💡 My Experience</h3>
    <p>${story.experience}</p>

    <h3>🚀 Impact On My Journey</h3>
    <p>${story.impact}</p>
    `;

    document.getElementById("storyModal")
    .style.display = "flex";
}
function closeStory(){

    document.getElementById("storyModal")
    .style.display = "none";

}
window.addEventListener("click", function(event){

    const modal =
    document.getElementById("storyModal");

    if(event.target === modal){

        modal.style.display = "none";

    }

});