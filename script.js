function loadVideos(file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            const links = data.split('\n');
            const container = document.getElementById('videoContainer');
            container.innerHTML = '';
            links.forEach(link => {
                const iframe = document.createElement('iframe');
                iframe.src = getEmbedLink(link);
                iframe.width = '560';
                iframe.height = '315';
                container.appendChild(iframe);
            });
        });
}

function getEmbedLink(link) {
    if (link.includes('instagram.com')) {
        return `https://www.instagram.com/p/${link.split('/p/')[1].split('/')[0]}/embed`;
    }
    return link;
}
