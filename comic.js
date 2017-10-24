const comicTypes={
    'van': {
        page:'index',
        tagline:'A webcomic by Est Bisto',
        max: 1
    },
    'inaf': {
        page:'inaf-ias',
        tagline:'It\'s not a Ferret... IT\'S A STOAT!',
        max: 1,
    }
};

function setTitle(comic) {
    console.log(comic);
    const header = document.getElementById('header');
    
    const tagline=comicTypes[comic].tagline;
    const img = document.createElement('img');
    img.setAttribute('src','images/Stan_van_title.png');
    img.setAttribute('class','title');

    const link = document.createElement('a');
    link.setAttribute("href", `./index.html`);        
    link.appendChild(img);   
    

    const sub = document.createElement('h3');
    sub.appendChild(document.createTextNode(tagline));
    header.appendChild(link);
    header.appendChild(sub);
}

function setImage(comic) {
    const maxImg=comicTypes[comic].max;
    const page=comicTypes[comic].page;
    const urlText = window.location;
    const url = new URL(urlText);
    const img = parseInt(url.searchParams.get('img') || maxImg);

    setTitle(comic);
    
    document.getElementById("comic").setAttribute("src", `${comic}/${img}.png`);

    if(img>=maxImg) {
        document.getElementById("next").style.display="none";
    }
    else {
        document.getElementById("next").style.display="inline";
        document.getElementById("next").setAttribute("href", `./${page}.html?img=${img+1}`);
    }
    if(img<=1) {
        document.getElementById("prev").style.display="none";
    }
    else {
        document.getElementById("prev").style.display="inline";
        document.getElementById("prev").setAttribute("href", `./${page}.html?img=${img-1}`);
    }
}

function listImages() {
    const urlText = window.location;
    const url = new URL(urlText);
    const comic = url.searchParams.get('comic')|| 'van';
    const maxImg=comicTypes[comic].max;
    const page=comicTypes[comic].page;
    const list = document.getElementById('comics');

    setTitle(comic);
    
    for(let c=1;c<=maxImg;++c) {
        const entry = document.createElement('li');
        const link = document.createElement('a');
        link.setAttribute("href", `./${page}.html?img=${c}`);        
        link.appendChild(document.createTextNode(`Comic ${c}`));   
        entry.appendChild(link);
        list.appendChild(entry); 
    }
}
