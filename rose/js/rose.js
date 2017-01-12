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
const secondHand2 = document.querySelector('.second-hand2');
const minHand2 = document.querySelector('.min-hand2');
const hourHand2 = document.querySelector('.hour-hand2');

function setDate() {
  const now = new Date()
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  secondHand2.style.transform = `rotate(${secondsDegrees}deg)`;

  const min = now.getMinutes();
  const minDegrees = ((min/60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  minHand2.style.transform = `rotate(${minDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour/12) * 360) + ((min/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  hourHand2.style.transform = `rotate(${hourDegrees}deg)`;

}


setInterval(setDate, 1000);

//Eng/Thai transition

document.getElementById("calculator").addEventListener("mouseover", calcThai);
document.getElementById("calculator").addEventListener("mouseout", calculator);
document.getElementById("words").addEventListener("mouseover", wordsThai);
document.getElementById("words").addEventListener("mouseout", words);
document.getElementById("songs").addEventListener("mouseover", songsThai);
document.getElementById("songs").addEventListener("mouseout", songs);
document.getElementById("pictures").addEventListener("mouseover", picturesThai);
document.getElementById("pictures").addEventListener("mouseout", pictures);
document.getElementById("clock").addEventListener("mouseover", clockThai);
document.getElementById("clock").addEventListener("mouseout", clock);
document.getElementById("poem").addEventListener("mouseover", poemThai);
document.getElementById("poem").addEventListener("mouseout", poem);

function calculator() {
    document.getElementById("calculator").innerHTML = "Calculator";
}

function calcThai() {
    document.getElementById("calculator").innerHTML = "เครื่องคิดเลข";
}

function words() {
    document.getElementById("words").innerHTML = "Words";
}

function wordsThai() {
    document.getElementById("words").innerHTML = "คำ";
}

function songs() {
    document.getElementById("songs").innerHTML = "Songs";
}

function songsThai() {
    document.getElementById("songs").innerHTML = "เพลง";
}

function pictures() {
    document.getElementById("pictures").innerHTML = "Pictures";
}

function picturesThai() {
    document.getElementById("pictures").innerHTML = "ภาพ";
}

function clock() {
    document.getElementById("clock").innerHTML = "Clock";
}

function clockThai() {
    document.getElementById("clock").innerHTML = "นาฬิกา";
}

function poem() {
    document.getElementById("poem").innerHTML = "Poem";
}

function poemThai() {
    document.getElementById("poem").innerHTML = "บทกวี";
}


//Metric/Standard Calculator

function weightConverter(valNum) {
  document.getElementById("output").innerHTML=valNum/2.2046;
}
