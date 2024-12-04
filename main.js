let myBtn = document.getElementById('clicked');
let myMenu = document.getElementById('navy');
let xIcon = document.getElementById('xIcon');

myBtn.onclick = () => {
    myMenu.classList.toggle('go-on');

    if(xIcon.classList.contains("hamburger")){
        xIcon.className = "fas fa-times x-icon"
    }else{
        xIcon.className = "fas fa-bars hamburger"
    }   

} 


