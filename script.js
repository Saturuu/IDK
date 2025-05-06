
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const contentDiv = document.getElementById('content');
    data.forEach(item => {
      const card = document.createElement('div');
      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" style="width:200px">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <hr>
      `;
      contentDiv.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));