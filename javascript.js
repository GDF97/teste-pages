function Sobre(){
    if(document.getElementById('sobre-section').classList.contains ('inactive')){
        document.getElementById('sobre-section').classList.replace('inactive','active');
        document.getElementById('home-section').classList.replace('active','inactive');
        document.getElementById('work-section').classList.replace('active','inactive');
        document.getElementById('contato-section').classList.replace('active','inactive');
    }
    else{
        document.getElementById('sobre-section').classList.replace('active','inactive');
    }
}

function Work(){
    if(document.getElementById('work-section').classList.contains ('inactive')){
        document.getElementById('work-section').classList.replace('inactive','active');
        document.getElementById('home-section').classList.replace('active','inactive');
        document.getElementById('sobre-section').classList.replace('active','inactive');
        document.getElementById('contato-section').classList.replace('active','inactive');
    }
    else{
        document.getElementById('work-section').classList.replace('active','inactive');
    }
}

function Contato(){
    if(document.getElementById('contato-section').classList.contains ('inactive')){
        document.getElementById('contato-section').classList.replace('inactive','active');
        document.getElementById('home-section').classList.replace('active','inactive');
        document.getElementById('sobre-section').classList.replace('active','inactive');
        document.getElementById('work-section').classList.replace('active','inactive');
    }
    else{
        document.getElementById('contato-section').classList.replace('active','inactive');
    }
}


function Voltar(){
    if(document.getElementById('home-section').classList.contains ('inactive')){
        document.getElementById('home-section').classList.replace('inactive','active');
        document.getElementById('sobre-section').classList.replace('active','inactive');
        document.getElementById('work-section').classList.replace('active','inactive');
        document.getElementById('contato-section').classList.replace('active','inactive');
    }
    else{
        document.getElementById('sobre-section').classList.replace('active','inactive');
    }
}
