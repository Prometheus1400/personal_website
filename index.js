function OpenTab(evt,label){
    var i, content, chosen, buttons;
    content = document.getElementsByClassName("content")
    for(i=0; i < content.length; i++){
        content[i].style.display = "none";
    }

    buttons = document.getElementsByClassName("HeaderButton");
    for(i=0; i < buttons.length; i++){
        buttons[i].className = buttons[i].className.replace(" active","");
    }
    chosen = document.getElementById(label);
    chosen.style.display="block";
    evt.currentTarget.className += " active";
    console.log("you found my easter egg");

}
