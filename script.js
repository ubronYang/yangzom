function myFunction(){
    var x= document.getElementById("mytopmenu");

    if (x.className === "header"){
        x.className += " responsive";
    }

    else{
        x.className = "header";
    }
    

}