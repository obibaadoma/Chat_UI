document.addEventListener('DOMContentLoaded', function() {
  const portfolioSection = document.getElementById('portfolio');

  // Sample portfolio data
  const portfolioData = [
      { title: 'Project 1', description: 'Description of Project 1', metrics: 'Metric 1: 100k downloads' },
      { title: 'Project 2', description: 'Description of Project 2', metrics: 'Metric 2: 50k installs' },
      { title: 'Project 3', description: 'Description of Project 3', metrics: 'Metric 3: 20 forks' }
  ];

  // Generate portfolio HTML
  portfolioData.forEach(project => {
      const article = document.createElement('article');
      article.innerHTML = `
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <p>${project.metrics}</p>
          <button>Remove</button>
      `;
      portfolioSection.appendChild(article);
  });

  // Remove button event listener
  portfolioSection.addEventListener('click', function(event) {
      if (event.target.tagName === 'BUTTON') {
          event.target.closest('article').remove();
      }
  });
});
