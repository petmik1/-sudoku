console.log('hello world')
var rad1rute1 = document.getElementById('rad1rute1');
var button = document.getElementById('button')
button.onsubmit = function (event) {
  event.preventdefault();
  console.log(rad1rute1.value);

}
