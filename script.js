function loadVideos(file) {
    fetch(`https://raw.githubusercontent.com/geetsswain/study-resources-links/refs/heads/main/${file}.txt`)
        .then(response => response.text())
        .then(data => {
            const links = data.split('\n');
            const container = document.getElementById('videoContainer');
            container.innerHTML = '';
            links.forEach(link => {
                const col = document.createElement('div');
                col.className = 'col-12 mb-4';
                const iframe = document.createElement('iframe');
                iframe.src = getEmbedLink(link);
                iframe.width = '100%';
                iframe.height = '315';
                iframe.className = 'lazyload';
                col.appendChild(iframe);
                container.appendChild(col);
            });
        });
}

function getEmbedLink(link) {
    if (link.includes('instagram.com/p/')) {
        return `https://www.instagram.com/p/${link.split('/p/')[1].split('/')[0]}/embed`;
    } else if (link.includes('instagram.com/reel/')) {
        return `https://www.instagram.com/reel/${link.split('/reel/')[1].split('/')[0]}/embed`;
    } else if (link.includes('instagram.com/reels/')) {
        return `https://www.instagram.com/reels/${link.split('/reels/')[1].split('/')[0]}/embed`;
    }
    return link;
}

