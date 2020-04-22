console.log('hello world')
   document.write("<table border='1px' class='table'>");
            
            
            
            // for(i = 1; i < 11; i++)
            // {
            //     document.write("<th> [ " + i + " ]</th>");
            // }
            
           
            
            for(x = 1; x<10; x++) {
               
                
                document.write("<tr>");
                
                for(y= 1; y< 10; y++) {
                 document.write("<td>"+'<input type="number" id=''  >'+"</td>");
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
