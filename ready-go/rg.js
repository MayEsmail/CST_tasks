function readyGo(inp){
    if(inp===1){
        document.getElementById("first_img").src = "red.png";
        document.getElementById("sec_img").src = "gray.png";
        document.getElementById("third_img").src = "gray.png";
        document.getElementsByClassName("message")[0].innerText="Stop";
        document.getElementsByClassName("message")[0].style.color="red";
    }
    else if(inp===2){
        document.getElementById("first_img").src = "gray.png";
        document.getElementById("sec_img").src = "orange.png";
        document.getElementById("third_img").src = "gray.png";
        document.getElementsByClassName("message")[0].innerText="Steady";
        document.getElementsByClassName("message")[0].style.color="orange";
    }
    else if(inp===3){
        document.getElementById("first_img").src = "gray.png";
        document.getElementById("sec_img").src = "gray.png";      
        document.getElementById("third_img").src = "green.png";
        document.getElementsByClassName("message")[0].innerText="Go";
        document.getElementsByClassName("message")[0].style.color="green";
    }
}