var space="&nbsp";
var nl="<br>";
var levels=prompt("Enter number of levels");
levels=parseInt(levels);
for(let i=1;i<=levels;i++){
    for(let j=levels-i;j>=0;j--)
        document.write(space+space);
    for(let j=i;j>0;j--)
        document.write("*");
    document.write(nl)
}