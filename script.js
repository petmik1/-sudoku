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
    inpTall1.value,
    inpTall2.value,
    inpTall3.value,
    inpTall4.value,
    inpTall5.value,
    inpTall6.value,
    inpTall7.value,
    inpTall8.value,
    inpTall9.value,
  ]);
};
console.log(Rad);
