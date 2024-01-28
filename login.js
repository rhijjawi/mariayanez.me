document.addEventListener("DOMContentLoaded", ()=>{
    document.addEventListener("keydown", login);
})


function login(e) {
    if (e.keyCode == 13 && document.getElementById('password').value.length > 0) {
        const lockElement = document.getElementById('lock');
        lockElement.style.transition = 'transform 2s'; // Adjust the duration as 
        lockElement.style.transform = `translate(0, ${-1600}px)`;
        return 1;
    }
}
