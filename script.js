function loadVideos(file) {
    fetch(`https://raw.githubusercontent.com/veena-g123/LinksRender/refs/heads/main/data/${file}.txt`)
        .then(response => response.text())
        .then(data => {
            const links = data.split('\n');
            const container = document.getElementById('videoContainer');
            container.innerHTML = '';
            links.forEach(link => {
                const iframe = document.createElement('iframe');
                iframe.src = link;
                iframe.width = '560';
                iframe.height = '315';
                container.appendChild(iframe);
            });
        });
}
