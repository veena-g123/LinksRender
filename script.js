function loadLinks(category) {
    const url = `https://raw.githubusercontent.com/veena-g123/LinksRender/main/data/${category}.txt`;
    // Uncomment the line below to use a CORS proxy for testing
    // const url = `https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/veena-g123/LinksRender/main/data/${category}.txt`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const videoLinks = data.split('\n').filter(link => link.trim() !== '');
            const videoContainer = document.getElementById('videoContainer');
            videoContainer.innerHTML = '';  // Clear existing content

            videoLinks.forEach(link => {
                const videoElement = document.createElement('video');
                videoElement.width = 560;
                videoElement.height = 315;
                videoElement.src = link.trim(); // Link to the video file
                videoElement.controls = true;

                // Append video element directly to videoContainer
                videoContainer.appendChild(videoElement);
            });
        })
        .catch(error => {
            console.error('Error fetching video links:', error);
        });
}
