function loadVideos(file) {
    fetch(`https://raw.githubusercontent.com/veena-g123/LinksRender/refs/heads/main/data/${file}.txt`)
        .then(response => response.text())
        .then(data => {
            const links = data.trim().split('\n');
            const container = document.getElementById('videoContainer');
            container.innerHTML = '';
            console.log(links.length)
            links.forEach(link => {
                const iframe = document.createElement('iframe');
                iframe.src = getEmbedLink(link);
                iframe.width = '200';
                iframe.height = '150';
                container.appendChild(iframe);
            });
        });
}

function getEmbedLink(link) {
    // if (link.includes('instagram.com')) {
    //     return `https://www.instagram.com/p/${link.split('/p/')[1].split('/')[0]}/embed`;
    // }
    if (link.includes('instagram.com/p/')) {
        return `https://www.instagram.com/p/${link.split('/p/')[1].split('/')[0]}/embed`;
    } else if (link.includes('instagram.com/reel/')) {
        return `https://www.instagram.com/reel/${link.split('/reel/')[1].split('/')[0]}/embed`;
    }else if (link.includes('instagram.com/reels/')) {
        return `https://www.instagram.com/reels/${link.split('/reels/')[1].split('/')[0]}/embed`;
    }
    return link;
}
