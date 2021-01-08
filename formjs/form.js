var Input = document.getElementsByTagName("input")[0]
var email = document.getElementsByTagName("input")[1]
var password = document.getElementsByTagName("input")[2]
var radiob = document.getElementsByClassName("radio")
var checks = document.getElementsByClassName("checkbox")
var select_list= document.getElementById("element_6")
var submit_button = document.getElementById("saveForm")
var err_list=document.getElementById("error-messages")
var err_msg="";
var checks_sum=0;
submit_button.addEventListener("click", bc)
function checkmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}
function bc(e) {          
    err_msg="";
    if(Input.value=="")
        err_msg+="<li>Name is required.</li>";
    if(checkmail(email.value)==false)
        err_msg+="<li>Email is not valid</li>";
    if(password.value.length<8)
        err_msg+="<li>Password must be 8 chars at least</li>";
    if(radiob[0].checked==false&&radiob[1].checked==false)
        err_msg+="<li>Please select your gender.</li>";
    for(let i=0;i<5;i++)
        checks_sum+=checks[i].checked;
    if(checks_sum<2)
        err_msg+="<li>Please select at least two sports.</li>";
    if(select_list.value=="")

        err_msg+="<li>Please select your country</li>"
    if(err_msg.length>0){
        e.preventDefault();
        document.getElementsByClassName("errors")[0].style.display="block";
        err_list.innerHTML=err_msg;
    }
}