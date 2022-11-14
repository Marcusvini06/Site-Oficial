function openApp(){
    document.getElementById('app').className = "open";
  }
function closeApp(){
    document.getElementById('app').className = "close";
  }
convert.onclick = () => {
  openApp();
}
off.onclick = () => {
  closeApp();
} 
function fahr(){
  var num = Number(document.querySelector('input').value);
  var result = ((1.8 * num) + 32).toFixed(0);
  
  document.querySelector('h1').innerHTML = result + '<span>°F</span>';
  document.querySelector('#temp').innerHTML = result + '<span>°F</span>';
  document.querySelector('#forml').innerHTML = num + '<sup>°C</sup> = ' + result + '<sup>°F</sup>';
  }
function cels(){
  var num = Number(document.querySelector('input').value);
  var result = ((num - 32) / 1.8).toFixed(0);
  
  document.querySelector('h1').innerHTML = result + '<span>°C</span>';
  document.querySelector('#temp').innerHTML = result + '<span>°C</span>';
  document.querySelector('#forml').innerHTML = num + '<sup>°F</sup> = '+ result + '<sup>°C</sup>';
  }
fahrenheit.onclick = () => {
  fahr();
  document.querySelector('input').value = ""
}
celsius.onclick = () => {
  cels();
  document.querySelector('input').value = ""
}