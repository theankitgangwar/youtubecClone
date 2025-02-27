
const searchText = window.location.search;
const splitText = searchText.split('=');
const txt = splitText[1];
console.log(txt)
const getSearchData = (txt) => {
    
    const url = `https://youtube138.p.rapidapi.com/search/?q=${txt}&hl=en&gl=US`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '3baf640abemsh996f3a45bacf431p1d9ab4jsne254058e8256',
            'x-rapidapi-host': 'youtube138.p.rapidapi.com'
        }
    };

    const pr = fetch(url, options);

    pr.then((data) => {
        const pr2 = data.json();
        // console.log(pr2);
        pr2.then((res) => {
            // response = res;
            // console.log(res)
            // console.log(res.contents)
            showSearchUI(res.contents)
            // console.log(res);
        }).catch((err) => {
            console.log(err)
        })
    }).catch((err) => {
        console.log(err)
    })


}
getSearchData(txt);


const roots = document.querySelector('section');
console.log(roots);
const showSearchUI = (ress) => {
    // console.log(ress)
    ress.forEach((res) => {
        const card = document.createElement('div');
            // console.log(res.video.videoId);
        card.innerHTML = `
            <iframe 
                    width="448" 
                    height="252" 
                    src = 'https://www.youtube-nocookie.com/embed/${res.video.videoId}'  
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen >
                </iframe>
        `;

        roots.appendChild(card);
    });


}


