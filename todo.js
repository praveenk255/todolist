
var todoArray = [];
var i=0;
var index = 1;
var aid =0;
var newarr =[];
var thira = [];
let aid2 = 0;
var index2 = 1;





function getValue() {

    var todoitem = document.getElementById("todo").value;
    var disarr = document.getElementById("target");
    var blankv = "";

    if (aid>aid2 && aid !== 0) {
        aid = aid2;

    }


    if(todoitem=="" || todoitem==null){
        alert("enter a value");
        return false;
    } else {
        todoArray.push("<tr>" +
            "<td>" + index  + "." + "</td>" +
            "<td>" + todoitem + "</td>" +
            "<td>" + "<button onclick=\"arraydel(" + aid + ")\">" + "x" + "</button>" + "</td>" +
            "</tr>");
        newarr.push(todoitem);

        index++;
        aid++;
        aid2++;


        document.getElementById("todo").value="";
       for(i=0; i<todoArray.length; i++){
            blankv += todoArray[i];
        }
        document.getElementById("tar").innerHTML = blankv;
            console.log(todoArray);
        return true;


        }

    }


function arraydel(aid3) {


    var blankv = "";

    if (aid2 !== 0) {
        aid2 = 0;
    }


    if(index2 !== 1){
        index2 = 1;
    }


    thira = [];


    //newarr = newarr.filter(function(item) {
       //return item !== newarr[aid3]; });

    var jj = newarr.indexOf(aid3);
    newarr.splice(aid3, 1);
    console.log(jj);
    if (jj<0){
        jj = 0;
    }


    for (i = 0; i < newarr.length; i++) {
        thira.push("<tr>" +
            "<td>" + index2 + "." + "</td>" +
            "<td>" + newarr[i] + "</td>" +
            "<td>" + "<button onclick=\"arraydel(" + aid2 + ")\">" + "x" + "</button>" + "</td>" +
            "</tr>");
        index2++;
        aid2++;
    }


    document.getElementById("todo").value="";
    for(i=0; i<thira.length; i++){
        blankv += thira[i];
    }
    document.getElementById("tar").innerHTML = blankv;
   todoArray = [];
    for (i = 0; i < thira.length; i++) {
        todoArray.push(thira[i]);

    }

index = index2;




}



