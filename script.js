//lager tabell med inputfelt
document.write("<form>");
document.write("<table border='1px' class='table align='center'>");

for (x = 1; x < 10; x++) {
  document.write("<tr>");

  for (y = 1; y < 10; y++) {
    document.write(
      "<td>" +
        "<input type ='number'  class='inptbl' max ='9' min='0' value='0'>" +
        "</td>"
    );
  }

  document.write("</tr>");
}

document.write("</table>");
document.write("</form>");

function myfunction() {
  console.log("hello world");
}

/*puzzle = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]*/
