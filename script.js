console.log('hello world')
var rad1rute1 = document.getElementById('rad1rute1');
var button = document.getElementById('button')
button.onsubmit = function (event) {
  event.preventdefault();
  console.log(rad1rute1.value);

}

puzzle = [[0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0]]
// https://www.valentinog.com/blog/html-table/


// function tableCreate() {
//   var body = document.getElementsByTagName('body')[0];
//   var tbl = document.createElement('table');
//   tbl.style.width = '100%';
//   tbl.setAttribute('border', '1');
//   var tbdy = document.createElement('tbody');
//   for (var i = 0; i < 3; i++) {
//     var tr = document.createElement('tr');
//     for (var j = 0; j < 2; j++) {
//       if (i == 2 && j == 1) {
//         break
//       } else {
//         var td = document.createElement('td');
//         td.appendChild(document.createTextNode('\u0
