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
    if (date.getDate() === 23 == true && date.getMonth() === 0 == true || date.getDate() === 14 == true && date.getMonth() === 1 == true) {
        window.location.href = 'rose.html';
    } else alert("You have to wait until Birthday or Valentines Day");
}

/* Clock*/
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const secondHand2 = document.querySelector('.second-hand2');
const minHand2 = document.querySelector('.min-hand2');
const hourHand2 = document.querySelector('.hour-hand2');


function getTime() {
  //load timezones to moment
  moment.tz.add([
    "America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0|42e5",
    "Asia/Bangkok|BMT ICT|-6G.4 -70|01|-218SG.4|15e6"
]);
  const now = moment();

  //clock seconds for both clocks
  const seconds1 = moment.tz('Asia/Bangkok').format('s');
  const secondsDegrees1 = ((seconds1/60) * 360) + 90;
  const seconds2 = moment.tz('America/Phoenix').format('s');
  const secondsDegrees2 = ((seconds2/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees1}deg)`;
  secondHand2.style.transform = `rotate(${secondsDegrees2}deg)`;
//clock minutes for both clocks
  const min1 = moment.tz('Asia/Bangkok').format('m');
  const minDegrees1 = ((min1/60) * 360) + 90;
  const min2 = moment.tz('America/Phoenix').format('m');
  const minDegrees2 = ((min2/60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegrees1}deg)`;
  minHand2.style.transform = `rotate(${minDegrees2}deg)`;
//clock hours for both clocks
  const hour1 = moment.tz('Asia/Bangkok').format('h');
  const hourDegrees1 = ((hour1/12) * 360) + ((min1/60)*30) + 90;
  const hour2 = moment.tz('America/Phoenix').format('h');
  const hourDegrees2 = ((hour2/12) * 360) + ((min2/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees1}deg)`;
  hourHand2.style.transform = `rotate(${hourDegrees2}deg)`;

//2400 label
  document.getElementById("thai24").innerHTML = moment.tz('Asia/Bangkok').format('D MMMM YYYY, H:mm:ss a')
  document.getElementById("az24").innerHTML = moment.tz('America/Phoenix').format('MMMM Do, YYYY h:mm:ss a');

//AM/PM
  const amThailand = moment.tz('Asia/Bangkok').format('a');
  const amAZ = moment.tz('America/Phoenix').format('a');


//Change background based on am/pm
    if (amThailand === "am") {
      $('.clock1').css('background-image', 'url(img/day.jpg)');
    } else {
      $('.clock1').css('background-image', 'url(img/night.jpg)');
    }

    if (amAZ === "am") {
      $('.clock2').css('background-image', 'url(img/day.jpg)');
    } else {
      $('.clock2').css('background-image', 'url(img/night.jpg)');
    }
  }


setInterval(getTime, 1000);

//Eng/Thai translation - event listen mouseouver/mouseout

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


function kilogramsToPounds(value) {
  document.getElementById("output").innerHTML=value*2.2046;
}

function poundsToKilograms(value) {
  document.getElementById("output").innerHTML=value/2.2046;
}

function FahrenheitToCelcius(value) {
  value = parseFloat(value);
  document.getElementById("output").innerHTML=(value-32)/1.8;
}

function celsiusToFahrenheit(value) {
  value = parseFloat(value);
  document.getElementById("output").innerHTML=(value*1.8)+32;
}

function feetToMeters(value) {
  document.getElementById("output").innerHTML=value/3.2808;
}

function metersToFeet(value) {
  document.getElementById("output").innerHTML=value*3.2808;
}

function inchesToCM(value) {
  document.getElementById("output").innerHTML=value/0.39370;
}

function cmToInches(value) {
  document.getElementById("output").innerHTML=value*0.39370;
}

function kilometersToMiles(value) {
  document.getElementById("output").innerHTML=value*0.62137;
}

function milesToKilometers(value) {
  document.getElementById("output").innerHTML=value/0.62137;
}

function mphToKPH(value) {
  document.getElementById("output").innerHTML=value*1.609344;
}

function kphToMPH(value) {
  document.getElementById("output").innerHTML=value/1.609344;
}

function validate() {
  var value = document.getElementById("input").value
  var selectType1 = document.getElementById("select1");
  var selectType2 = document.getElementById("select2");
  var selectedValue1 = selectType1.options[selectType1.selectedIndex].value;
  var selectedValue2 = selectType2.options[selectType2.selectedIndex].value;

  console.log(value);
    if (selectedValue1 === "pounds" && selectedValue2 === "kilograms") {
      poundsToKilograms(value);
    }
}
