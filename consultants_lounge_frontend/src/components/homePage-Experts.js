
export function loadExperts() {
    fetch('staticExperts.json')
      .then(response => response.json())
      .then(data => {
        const expertsContainer = document.getElementById('experts-container');
  
        data.forEach(expert => {
          const expertCard = document.createElement('div');
          expertCard.classList.add('expert-card');
  
          const img = document.createElement('img');
          img.src = expert.image;
          img.alt = expert.name;
          img.classList.add('expert-img');
          expertCard.appendChild(img);
  
          const expertInfo = document.createElement('div');
          expertInfo.classList.add('expert-info');
  
          const expertName = document.createElement('div');
          expertName.classList.add('expert-name');
          expertName.textContent = expert.name;
  
          const expertTitle = document.createElement('div');
          expertTitle.classList.add('expert-title');
          expertTitle.textContent = expert.title;
  
          expertInfo.appendChild(expertName);
          expertInfo.appendChild(expertTitle);
          expertCard.appendChild(expertInfo);
  
          expertsContainer.appendChild(expertCard);
        });
      })
      .catch(error => console.error('Error loading expert data:', error));
  }

  