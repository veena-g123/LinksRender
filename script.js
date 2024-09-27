function loadLinks(category) {
    fetch(`data/${category}.txt`)
        .then(response => response.text())
        .then(data => {
            const videoLinks = data.split('\n').filter(link => link.trim() !== '');
            const videoContainer = document.getElementById('videoContainer');
            videoContainer.innerHTML = '';  // Clear existing videos
            
            videoLinks.forEach(link => {
                const videoId = extractVideoId(link);
                if (videoId) {
                    const iframe = document.createElement('iframe');
                    iframe.width = "560";
                    iframe.height = "315";
                    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0`;
                    iframe.frameBorder = "0";
                    iframe.allow = "autoplay; encrypted-media";
                    iframe.allowFullscreen = true;
                    videoContainer.appendChild(iframe);
                }
            });
        });
}

function extractVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
