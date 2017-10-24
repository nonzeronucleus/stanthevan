const maxImg = 3;

function setImage() {
    var url = window.location;
    var url = new URL(url);
    var img = parseInt(url.searchParams.get('img') || maxImg);
    document.getElementById("comic").setAttribute("src", `comic/${img}.png`);
    document.getElementById("next").setAttribute("href", `./comic.html?img=${img+1}`);
    document.getElementById("prev").setAttribute("href", `./comic.html?img=${img-1}`);
}