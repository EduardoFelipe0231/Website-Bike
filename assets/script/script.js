//seleciona a image da bike
let imgBike = document.getElementById('bike');
//seleciona os objetos btns via classe
let btns = document.getElementsByClassName('opt');
//seleciona o botão do theme
let btnsTheme = document.getElementById('nav-theme');
//seleciona o dot do logo
let dotLogo = document.querySelector('.nav-logo-dot');

const switchTheme = () => {
    //Get root element and data-theme value
        const rootElem = document.documentElement
        let dataTheme = rootElem.getAttribute('data-theme'),
            newTheme
    
        newTheme = (dataTheme === 'light') ? 'dark' : 'light'
    
        //set the new HTML attribute
        rootElem.setAttribute('data-theme', newTheme)
    
        //set the new local storage item
        localStorage.setItem('them', newTheme)
}


//seleciona cada objeto via INDEX da nossa lista de btns e atribui uma função para cada um deles, nesse é a troca da imagem.
btns[0].onclick = function(){
    imgBike.src = 'assets/images/Black.png';
    btnsTheme.style.color = "#000000";

}

btns[1].onclick = function(){
    imgBike.src = 'assets/images/Beige.png'
    btnsTheme.style.color = "#EBDCC8";
    dotLogo.style.color = "#EBDCC8";
}

btns[2].onclick = function(){
    imgBike.src = 'assets/images/maroon.png'
    btnsTheme.style.color = "#CD9489";
    dotLogo.style.color = "#CD9489";
}

btns[3].onclick = function(){
    imgBike.src = 'assets/images/lavendar.png'
    btnsTheme.style.color = "#D4CEE7";
    dotLogo.style.color = "#D4CEE7";
}

btns[4].onclick = function(){
    imgBike.src = 'assets/images/brown.png'
    btnsTheme.style.color = "#E4BAB2";
    dotLogo.style.color = "#E4BAB2";
}




//btnsTheme
btnsTheme.addEventListener("click", e =>{
    if(btnsTheme.classList.contains('fa-moon')){
        btnsTheme.classList.replace('fa-moon', 'fa-sun')
        
    } else {
        btnsTheme.classList.replace('fa-sun', 'fa-moon')
    }
    switchTheme();
})



//iniciar o script library AOS
AOS.init();

//Quando reload página volta ao topo.
window.scrollTo(0, 0);
