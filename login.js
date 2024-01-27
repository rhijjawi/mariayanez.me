document.addEventListener("DOMContentLoaded", ()=>{
    document.addEventListener("keydown", login);
})


function login(e){
    if (e.keyCode == 13 && document.getElementById('password').value.length > 0){
        window.open("/main.html", "_self");
        return 1;
    };
    
}