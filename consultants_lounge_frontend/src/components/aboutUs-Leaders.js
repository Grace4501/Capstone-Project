function loadleadership() {
    fetch('leadershipTeam.json')
    .then(response => response.json())
    .then(data => {
        const leadershipContainer = document.getElementById('leadership-container');

        data.forEach(leadership => {
            const leadershipCard = document.createElement('div');
            leadershipCard.classList.add('leadership-card');

            const img = document.createElement('img');
            img.src = leadership.image;
            img.alt = leadership.name;
            img.classList.add('leadership-img');
            leadershipCard.appendChild(img);

            const leadershipInfo = document.createElement('div');
            leadershipInfo.classList.add('leadership-info');

            const leadershipName = document.createElement('div');
            leadershipName.classList.add('leadership-name');
            leadershipName.textContent = leadership.name;

            const leadershipTitle = document.createElement('div');
            leadershipTitle.classList.add('leadership-title');
            leadershipTitle.textContent = leadership.title;

            leadershipInfo.appendChild(leadershipName);
            leadershipInfo.appendChild(leadershipTitle);
            leadershipCard.appendChild(leadershipInfo);

            leadershipContainer.appendChild(leadershipCard);
        });
    })
    .catch(error => console.error('Error loading leadership team data:', error));
}