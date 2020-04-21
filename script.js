console.log('hello world')
   document.write("<table border='1px'>");
            
            
            
            for(i = 1; i < 11; i++)
            {
                document.write("<th> [ " + i + " ]</th>");
            }
            
           
            
            for(k = 1; k<11; k++)
            {
               
                
                document.write("<tr>");
                
                for(j= 1; j< 11; j++)
                {
                 document.write("<td>"+j+" X "+ k + " = " + j*k + "</td>")   
                }
                
                 document.write("</tr>"); 
            }

            document.write("</table>");






// puzzle = [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0]
// ]

// function tableCreate() {
  

// }
// tableCreate();
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
