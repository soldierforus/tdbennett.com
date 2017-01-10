/*Songs*/
function songList() {
    var embed = "https://www.youtube.com/embed/"
    var songs = [
    "-lLvtydTM78",
    "7PDUO3l8xiM",
    "N6Cq8w9tOFo",
    "2bfgkTAW6IY",
    "3JV74i4yvcA",
    "tQESZszV0Sg"
    ];
    var song = songs[Math.floor(Math.random() * songs.length)]
    document.getElementById('video').innerHTML = '<iframe width="640" height="360" src=' + embed + song + ' frameborder="0" allowfullscreen></iframe>';
}
songList();

/*Check Date*/
function onClick() {
    var date = new Date();
    if (date.getDate()  >= 14 && date.getMonth() >= 1 && date.getFullYear() >=2016)
        window.location.href = 'http://tdbennett.com/rose/rose.html';
    else alert("You have to wait until Valentine's Day!");
}

/* Clock*/
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date()
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const min = now.getMinutes();
  const minDegrees = ((min/60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((mins/12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);
