

// VARRIABLES UTILES DANS TOUTES LES SECTIONS
// Sélectionne le formulaire, et le personnage
let form = document.forms.personnage
let personnage = document.querySelector(".personnage")


//DEBUT CHANGEMENT COULEUR
// Place un interval de 5 seconde
let interval = setInterval(change_couleur, 5000)

// Excécute le changement de couleur
function change_couleur(){
    let r = aleatoire_entier(50, 255)
    let g = aleatoire_entier(50, 255)
    let b = aleatoire_entier(50, 255)
    
    personnage.style.backgroundColor = `rgb(${r},${g},${b})`
}
//FIN CHANGEMENT COULEUR


// DEBUT SECTION "TEXTE"
// Sélectionner le div "nom-personnage"
let monTexte = document.querySelector(".nom-personnage")


// Sélectionne la barre de texte du formulaire
// Change le contenue du div "nom-personnage"
form.nom.addEventListener("keyup", e => {

    monTexte.textContent = form.nom.value

    // Si la barre de texte est vide --> retour à la phrase initiale.
    // la fonction "required" est dans "outils.js"
    if (required(form.nom) == false){
        monTexte.textContent = "Mon texte ici"
    }
})
// FIN SECTION "TEXTE"


// DEBUT SECTION "FORME"
// Sélectionne la barre de choix de forme
let select = document.querySelector(".conteneur-choix-forme select")

// Change la forme du personnage, selon la valeur du "select"
select.addEventListener("change", e=> {    
    if (select.value == "cercle"){ 
        personnage.style.borderRadius = "100px"
    } else if (select.value == "carre"){
        personnage.style.borderRadius = "0px"
    } else if (select.value == "carre_arrondi"){
        personnage.style.borderRadius = "50px"
    }
    
}) 
// FIN SECTION "FORME"

//DEBUT SECTION "BORDURE"
let bordure_a = document.querySelectorAll(".conteneur-choix-bordure a")
let bordure_moins = bordure_a[0]
let bordure_plus = bordure_a[1]

let bordure_valeur = document.querySelector(".valeur")

bordure_moins.addEventListener("click", e=> {
    e.preventDefault()

 
    // Change la valeur "string" en "nombre".
    let valeurNombre = parseInt(bordure_valeur.textContent)
    // Ajoute 1 à la valeur "nombre"
    valeurNombre--
    // La valeur de la bordure affiché devient le nouveau nombre.
    // Math.max ---> Retourne la valeur la plus grande. Donc, "bordure_valeur" n'est jamais inférieur à 0.
    bordure_valeur.textContent = Math.max(0, valeurNombre)

    // Change la bordure réel du personnage pour notre nouveau nombre
    personnage.style.border =  bordure_valeur.textContent + "px solid #000"
    
})


bordure_plus.addEventListener("click", e=> {
    e.preventDefault()

 
    // Change la valeur "string" en "nombre".
    let valeurNombre = parseInt(bordure_valeur.textContent)
    // Ajoute 1 à la valeur "nombre"
    valeurNombre++
    // La valeur de la bordure affiché devient le nouveau nombre.
    bordure_valeur.textContent = valeurNombre

    // Change la bordure réel du personnage pour notre nouveau nombre
    personnage.style.border =  bordure_valeur.textContent + "px solid #000"
    
})
//FIN SECTION "BORDURE"


// DEBUT SECTION "YEUX"
// Sélectionner les yeux
let yeux_div = document.querySelectorAll(".yeux div")
let oeuil_1 = yeux_div[0]
let oeuil_2 = yeux_div[1]


// Sélectionner les boutons yeux1, yeux2, et yeux3
let yeux1 =  document.querySelector("#bt-yeux-1")
let yeux2 =  document.querySelector("#bt-yeux-2")
let yeux3 =  document.querySelector("#bt-yeux-3")


// Action --- > changer la forme des yeux
yeux1.addEventListener("click", e => {
    e.preventDefault()

    oeuil_1.style.borderRadius = "10px"
    oeuil_2.style.borderRadius = "10px"
})

yeux2.addEventListener("click", e => {
    e.preventDefault()

    oeuil_1.style.borderRadius = "50px"
    oeuil_2.style.borderRadius = "50px"
})



yeux3.addEventListener("click", e => {
    e.preventDefault()

    oeuil_1.style.borderTopRightRadius = "20px"
    oeuil_1.style.borderBottomLeftRadius = "20px"
    
    oeuil_2.style.borderTopRightRadius = "20px"
    oeuil_2.style.borderBottomLeftRadius = "20px"
})
//FIN SECTION "YEUX"


// DÉBUT DE LA SECTION "SURPRISE"

let body = document.querySelector(".projet2")
let surprise = document.querySelector(".surprise")
let surprise_p = document.querySelector(".surprise p")

let surprise_ballons = document.querySelector(".surprise-ballons") 

personnage.addEventListener("click", surprise1)

function surprise1(){  
    
    body.style.backgroundImage = "url(images/bg-etoile.jpg)"
    surprise_p.style.color = "#d424ae"
    monTexte.style.color = "#b00b87"
    surprise_p.textContent = "Cliquez encore pour revenir à la normal."
        
    personnage.addEventListener("click", removeAll)
}

function removeAll(){
    surprise.remove()
    surprise_ballons.remove()
    body.style.backgroundImage = null
    monTexte.style.color = "#222"
}

//  FIN DE LA SECTION "SURPRISE"

