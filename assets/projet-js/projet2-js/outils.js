function aleatoire(min, max) {
    let difference = max - min // 5
    let aleatoire = Math.random() * difference
    return min + aleatoire
}

function aleatoire_entier(min, max) {
    return Math.floor(aleatoire(min, max + 1))
}

function array_rand(tableau) {
    let index = Math.floor(Math.random() * tableau.length)
    return tableau[index]
}


function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
}


function required(inputtx) 
{
  if (inputtx.value.length == 0)
   { 
       return false; 
    }  	
    return true; 
} 


/**
 * Force le navigateur à mettre à jour la balise passée en paramètre
 * @param {HTMLElement} element 
 */
 function reflow(element) {
    if (element === undefined) {
        element = document.documentElement
    }
    void (element.offsetHeight)
}