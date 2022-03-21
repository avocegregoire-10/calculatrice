//DOM

const touches = [...document.querySelectorAll('.boutons')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');
//ecran.textContent = "0";


document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
});

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
})

const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)){
        switch(valeur){
            case '8':
                ecran.textContent = "";
                break;

            case '37':
                ecran.innerText = ecran.innerText.slice(0, -1);
                break;

            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message);
})