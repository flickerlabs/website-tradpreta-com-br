document.addEventListener('DOMContentLoaded', () => {
    fetch('source/links.json')
        .then(response => response.json())
        .then(data => {
            const linksContainer = document.getElementById('links-container');
            data.links.forEach(link => {
                const a = document.createElement('a');
                a.href = link.url;
                a.textContent = link.name;
                a.className = 'link';
                a.target = '_blank';
                linksContainer.appendChild(a);
            });
        })
        .catch(error => console.error('Erro ao carregar os links:', error));
});
