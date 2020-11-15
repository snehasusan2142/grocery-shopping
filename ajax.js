

function ajax(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
                        if(this.readyState==4 && this.status==200)
                        {
                            var response = JSON.parse(this.responseText);
                        
                        console.log(response);
                        visible();
                        var c=response.Cleaners;
                        var a=response.Dairy;
                        var d=response.HerbsandSpices;
                        var e=response.NonVeg;
                        var b=response.Produce;
                        var f=response.Snacks;
                        buildTable(a)
                        buildTable(b)
                        buildTable(c)
                        buildTable(d)
                        buildTable(e)
                        buildTable(f)

                       



                        }
                    }

xhttp.open("GET","list.json",true);
xhttp.send();



}


function buildTable(data) {
    var table = document.getElementById("myTable");
    var x = table.rows.length;
   
    
        for (var i=0;i<data.length;i++){

            var row =`<tr>
                            <td>${data[i].sl}</td>
                            <td>${data[i].Name}</td>
                            <td>${data[i].Quantity}</td>
                            <td>${data[i].Unit}</td>
                            <td>${data[i].Department}</td>
                            <td>${data[i].Notes}</td>

            
                        </tr>`
            table.innerHTML += row;
                }
// $('table tbody > tr').slice().hide();
}



function buildTable2(data) {
    var table = document.getElementById("myTable");
    var x = table.rows.length;

   $("#table1 tr").remove(); 

   table.innerHTML= `<thead>
   <tr>
     <th scope="col">Serial No</th>
     <th scope="col">Name</th>
     <th scope="col">Quantity</th>
     <th scope="col">Unit</th>
     <th scope="col">Department</th>
     <th scope="col">Notes</th>
   </tr>
 </thead>`

    
        for (var i=0;i<data.length;i++){

            var row =`<tr>
                            <td>${data[i].sl}</td>
                            <td>${data[i].Name}</td>
                            <td>${data[i].Quantity}</td>
                            <td>${data[i].Unit}</td>
                            <td>${data[i].Department}</td>
                            <td>${data[i].Notes}</td>

            
                        </tr>`
            table.innerHTML += row;
                }
// $('table tbody > tr').slice().hide();
}


function visible(){
    var t= document.getElementById('table1');
    t.style.visibility="visible";
    var z= document.getElementById('btn1');
    z.style.visibility="hidden";
    // var y= document.getElementById('btn2');
    // y.style.visibility="visible";
}


    function hide(){
        var t= document.getElementById('table1');
        t.style.visibility="hidden";
        // var z= document.getElementById('btn1');
        // z.style.visibility="visible";
        // var y= document.getElementById('btn2');
        // y.style.visibility="hidden";
    }
    function show(){
        var t= document.getElementById('table1');
        t.style.visibility="visible";
        // var z= document.getElementById('btn1');
        // z.style.visibility="visible";
        // var y= document.getElementById('btn2');
        // y.style.visibility="hidden";
    }



function myClick1(){
            var xhttp= new XMLHttpRequest();
            xhttp.onreadystatechange=function(){
                                if(this.readyState==4 && this.status==200)
                                {
                                    var response = JSON.parse(this.responseText);
                                
                                console.log(response);
                                visible();
                                
                                var c=response.Cleaners;
                                buildTable2(c);
        
        
                                }
                            }
        
        xhttp.open("GET","list.json",true);
        xhttp.send();
        
       
        
        }


        function myClick2(){
            var xhttp= new XMLHttpRequest();
            xhttp.onreadystatechange=function(){
                                if(this.readyState==4 && this.status==200)
                                {
                                    var response = JSON.parse(this.responseText);
                                
                                console.log(response);
                                visible();
                               
                                var b=response.Produce;
                            
                                buildTable2(b);
        
        
                                }
                            }
        
        xhttp.open("GET","list.json",true);
        xhttp.send();
        
       
        
        }


        function myClick3(){
            var xhttp= new XMLHttpRequest();
            xhttp.onreadystatechange=function(){
                                if(this.readyState==4 && this.status==200)
                                {
                                    var response = JSON.parse(this.responseText);
                                
                                console.log(response);
                                visible();
                               
                                var e=response.NonVeg;
                                
                                buildTable2(e);
        
        
                                }
                            }
        
        xhttp.open("GET","list.json",true);
        xhttp.send();
        
       
        
        }



        function myClick4(){
            var xhttp= new XMLHttpRequest();
            xhttp.onreadystatechange=function(){
                                if(this.readyState==4 && this.status==200)
                                {
                                    var response = JSON.parse(this.responseText);
                                
                                console.log(response);
                                visible();
                                var d=response.HerbsandSpices;
                               
                                buildTable2(d);
        
        
                                }
                            }
        
        xhttp.open("GET","list.json",true);
        xhttp.send();
        
       
        
        }



        function myClick5(){
            var xhttp= new XMLHttpRequest();
            xhttp.onreadystatechange=function(){
                                if(this.readyState==4 && this.status==200)
                                {
                                    var response = JSON.parse(this.responseText);
                                
                                console.log(response);
                                visible();
                                
                                var f=response.Snacks;
                                
                                buildTable2(f);
        
        
                                }
                            }
        
        xhttp.open("GET","list.json",true);
        xhttp.send();
        
       
        
        }



        function myClick6(){
            var xhttp= new XMLHttpRequest();
            xhttp.onreadystatechange=function(){
                                if(this.readyState==4 && this.status==200)
                                {
                                    var response = JSON.parse(this.responseText);
                                
                                console.log(response);
                                visible();
                                var a=response.Dairy;
                                buildTable2(a);
        
        
                                }
                            }
        
        xhttp.open("GET","list.json",true);
        xhttp.send();
        
       
        
        }