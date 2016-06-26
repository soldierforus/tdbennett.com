function songList() {
    var embed = "https://www.youtube.com/embed/"
    var songs = [
    "-lLvtydTM78",
    "7PDUO3l8xiM", 
    "N6Cq8w9tOFo",
    "2bfgkTAW6IY",
    "3JV74i4yvcA", 
    "rbLg6-MvOFo",
    "tQESZszV0Sg"
    ];
    var song = songs[Math.floor(Math.random() * songs.length)]
    document.getElementById('video').innerHTML = '<iframe width="640" height="360" src=' + embed + song + ' frameborder="0" allowfullscreen></iframe>';
}
songList();

function onClick() {
    var date = new Date();
    if (date.getDate()  >= 14 && date.getMonth() >= 1 && date.getFullYear() >=2016)
        window.location.href = 'http://tdbennett.com/rose/rose.html';
    else alert("You have to wait until Valentine's Day!");  
}

