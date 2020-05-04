var tblTall = document.getElementById("tblTall");
var regRad = document.getElementById("regRad");

var inpTall1 = document.getElementById("inpTall1");
var inpTall2 = document.getElementById("inpTall2");
var inpTall3 = document.getElementById("inpTall3");
var inpTall4 = document.getElementById("inpTall4");
var inpTall5 = document.getElementById("inpTall5");
var inpTall6 = document.getElementById("inpTall6");
var inpTall7 = document.getElementById("inpTall7");
var inpTall8 = document.getElementById("inpTall8");
var inpTall9 = document.getElementById("inpTall9");

var arrTall = [];

class Rad {
  constructor(tall1, tall2, tall3, tall4, tall5, tall6, tall7, tall8, tall9) {
    this.tall1 = tall1;
    this.tall2 = tall2;
    this.tall3 = tall3;
    this.tall4 = tall4;
    this.tall5 = tall5;
    this.tall6 = tall6;
    this.tall7 = tall7;
    this.tall8 = tall8;
    this.tall9 = tall9;
  }

  get tabellrad() {
    var rad = `<tr>
                <td>${this.tall1}</td>
                <td>${this.tall2}</td>
                <td>${this.tall3}</td>
                <td>${this.tall4}</td>
                <td>${this.tall5}</td>
                <td>${this.tall6}</td>
                <td>${this.tall7}</td>
                <td>${this.tall8}</td>
                <td>${this.tall9}</td>
            </tr>`;
    return rad;
  }
}

var tall = [];
//lage en class for rad, en for kolonne og en for rute, og så lage en class for sudoku som bruker disse

function visTall() {
  tblTall.innerHTML = "";
  for (var tall of arrTall) {
    tblTall.innerHTML += tall.tabellrad;
  }
}

regRad.onsubmit = function (evt) {
  evt.preventDefault();
  var nyttTall1 = Number(inpTall1.value);
  var nyttTall2 = Number(inpTall2.value);
  var nyttTall3 = Number(inpTall3.value);
  var nyttTall4 = Number(inpTall4.value);
  var nyttTall5 = Number(inpTall5.value);
  var nyttTall6 = Number(inpTall6.value);
  var nyttTall7 = Number(inpTall7.value);
  var nyttTall8 = Number(inpTall8.value);
  var nyttTall9 = Number(inpTall9.value);

  if (arrTall.length < 9) {
    var nyRad = new Rad(
      nyttTall1,
      nyttTall2,
      nyttTall3,
      nyttTall4,
      nyttTall5,
      nyttTall6,
      nyttTall7,
      nyttTall8,
      nyttTall9
    );
    arrTall.push(nyRad);
    visTall();
  }
  tall.push([
    Number(inpTall1.value),
    Number(inpTall2.value),
    Number(inpTall3.value),
    Number(inpTall4.value),
    Number(inpTall5.value),
    Number(inpTall6.value),
    Number(inpTall7.value),
    Number(inpTall8.value),
    Number(inpTall9.value),
  ]);
};
console.log(Rad);

var ikkeMulige = {};

function sudokuLøser(sudoku) {
  //test
  var sudoku = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

  for (var vert = 0; vert < sudoku.length; vert++) {
    for (var hori = 0; hori < sudoku.length; hori++) {
      //dobbel for-løkke som traverserer hele sudoku-arrayet
      if (sudoku[vert][hori] === 0) {
        //hvis den finner en 0, skal den sjekke raden, kolonnen og boksen for det tallet
        ikkeMulige = {};
        for (var i = 0; i < 9; i++) {
          if (sudoku[vert][i] > 0) {
            //sjekker raden
            ikkeMulige[sudoku[vert][hori]] = true; //hvis den finner et tall i raden skal det legges til som true i ikkeMulige
          }
          if (sudoku[i][hori] > 0) {
            //sjekker kolonnen
            ikkeMulige[sudoku[i][hori]] = true; //hvis den finner et tall i kolonnen skal det legges til som true i ikkeMulige
          }
        }
        //sjekker så boksen
        for (
          var vertBox = Math.floor(vert / 3) * 3;
          vertBox < Math.floor(vert / 3) * 3 + 3;
          vertBox++
        ) {
          //vertBox er lik nummeret på det øverste i ruten, vert = 6,7 el 8 blir alle vertBox = 6
          for (
            var horiBox = Math.floor(hori / 3) * 3;
            horiBox < Math.floor(hori / 3) * 3 + 3;
            horiBox++
          ) {
            if (sudoku[vertBox][horiBox]) {
              ikkeMulige[sudoku[vertBox][horiBox]] = true; //hvis den finner et tall i boksen skal det legges til som true i ikkeMulige
            }
          }
        }
        console.log(ikkeMulige);
      }
    }
  }
}

sudokuLøser();

//https://www.youtube.com/watch?v=kjPuNsu8nGs
