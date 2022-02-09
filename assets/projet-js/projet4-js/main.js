import liste from './components/liste.js'
import commande from './components/commande.js'
import accueil from './components/accueil.js'
import tags from './components/tags.js'

const app = {

    components: {
        "liste": liste,
        "commande": commande,
        "accueil": accueil,
        "tags": tags,
    },

    data() {
        return {

            choix_musique: "chansons/food-vlog-11204.mp3",
            choix_image: "chansons/food-vlog-11204.webp",
            choix_titre: "Food Vlog",
            temps_musique: 91,
            tags: ["beat", "Hip Hop"],

            recherche: "",
            
            page: "accueil",

        }
    },

    mounted() {

    },

    methods: {
        choisir_musique(choix, image, titre, temps, tags){

            this.choix_musique = "chansons/" +  choix
            this.choix_image = "chansons/" + image
            this.choix_titre =  titre
            this.temps_musique = temps
            this.tags = tags
        },
        changer_page(page){
            this.page = page
        },
        change_recherche(tag){
            this.recherche = tag
        }
    }

}

Vue.createApp(app).mount("#app")