var menuItem = document.getElementById("menu").getElementsByTagName("li");
for ( i = 0; i < menuItem.length; i++) {
    menuItem[0].addEventListener("click",selectItem);
}
    function selectItem(){
    alert("MERVEILLES D'ALGéRie.HOtel GOURARA,TIMIMOUN");
}
    menuItem[1].addEventListener("click",select);
    function select(){
    alert("+213(49)902627");
}
    menuItem[2].addEventListener("click",sele);
    function sele(){
    alert("ص.ب447,شارع أولاد ابراهيم,تميمون,1001,الجزائر");
}
