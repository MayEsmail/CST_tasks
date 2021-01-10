var ans=confirm("Do you fly?");
if(ans==true){
    ans=confirm("Are you wild?");
    (ans==true)?document.write("Eagle"):document.write("Parrot");
}
else{
    ans=confirm("Do you live under sea?");
    if(ans==true){
        ans=confirm("Are you wild?");
        (ans==true)?document.write("Shark"):document.write("Dolphin");
    }
    else{
        ans=confirm("Are you wild?");
        (ans==true)?document.write("Lion"):document.write("Cat");
    }
}