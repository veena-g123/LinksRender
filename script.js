const map = {
    "java": "https://docs.google.com/document/d/e/2PACX-1vRYuu-6wlqbrVVWUxDqCQ500Zqxq9crxOFqgfTsVb_16h6GcCJzvgyaBCwAnBrylJnsvSMQM1iD4Js7/pub",
    "spring-boot": 'https://docs.google.com/document/d/e/2PACX-1vSsAMCvxNfXv3lFLOIxnjNhG9zvJ55q2xScnaWbqdRewRn0dBfvPe0Ra1_xgBPXw9h16G-M-FLcyclS/pub',
    "mysql": "https://docs.google.com/document/d/e/2PACX-1vShi1FRWKkGpy9lQBCKbkL5vyIk5NIj5nHXwPRR4cJelG2cULxRpsk4aP8ePDUNSgik-2ENgGefSZ6-/pub",
    'hr-discussion': "https://docs.google.com/document/d/e/2PACX-1vS-atrq4pC2fPlXvFBnCCbO4t5sOyePFPFCarRqhYS5h9YnZzwQVE-s677x94JDB2JzI7SK0MPbsFgE/pub",
    'junit': "https://docs.google.com/document/d/e/2PACX-1vSncT-FUCmSl3IkUdqeY3FHQQwr-HFJMYyxbxoqNisTNIF-lXncO8Bmm7Q0DhoLXJVX_wBAt8wh190f/pub",
    'mockito': "https://docs.google.com/document/d/e/2PACX-1vTzVHAmLy2xI1VZgPyx3ow3WJFFz_7vcVT__TqY1bejQdebUCnEq9tFeVBjymKAFAjkjikstcGJw3aP/pub",
    'javaScript': "https://docs.google.com/document/d/e/2PACX-1vRdZA9o6whOcc3mi9HnRGpYfs9WBArYTLN84a_SLUnc04nkGigeP2ituhp8LCuIWBEgcOA_x_f_wqJj/pub",
    'misc': "https://docs.google.com/document/d/e/2PACX-1vRLRF-1BeTDIkGNq4b5HDG2o3cZUUN8klgrjpRGQwRzehKkT-BQnMKW_JXKEH0lBJsxpYkk6piZ-i2u/pub"
}
function loadVideos(file) {
    console.log(map[file])
    const base = 'https://api.allorigins.win/get?url=' + encodeURIComponent(map[file]);
    fetch(base)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let content = '';
            const parser = new DOMParser();
            const doc = parser.parseFromString(data.contents, 'text/html');
            const paragraphs = doc.body.getElementsByTagName('p');
            for (let p of paragraphs) {
                content += p.innerText + '\n';
            }

            const links = content.split('\n');
            const container = document.getElementById('videoContainer');
            container.innerHTML = '';
            links.forEach(link => {
                console.log(link);
                link = link.trim();
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

// function loadVideos() {
//     const url = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://docs.google.com/document/d/e/2PACX-1vSsAMCvxNfXv3lFLOIxnjNhG9zvJ55q2xScnaWbqdRewRn0dBfvPe0Ra1_xgBPXw9h16G-M-FLcyclS/pub');

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             const parser = new DOMParser();
//             const doc = parser.parseFromString(data.contents, 'text/html');
//             const paragraphs = doc.body.getElementsByTagName('p');

//             let content = '';
//             for (let p of paragraphs) {
//                 content += p.innerText + '\n';
//             }
//             console.log(content)
//             // const container = document.getElementById('videoContainer');
//             // container.innerHTML = '';
//             // links.forEach(link => {
//             //     console.log(link.href);
//             //     const linkElement = document.createElement('a');
//             //     linkElement.href = link.href;
//             //     linkElement.textContent = link.href;
//             //     container.appendChild(linkElement);
//             // });
//         });
// }
