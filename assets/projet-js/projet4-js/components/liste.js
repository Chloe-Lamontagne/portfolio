import externalTemplate from '../externalTemplate.js'

export default externalTemplate({

    template_url: "assets/projet-js/projet4-js/components/liste.html",

    props: ["filtre"],

    data(){
        return {
            musique: [],

        }
    },

    mounted() {
        fetch("chansons/chansons.json").then(resp => {
            resp.json().then(contenu_json => {
                this.musique = contenu_json
            })
        })

    },

    methods: {

        filtrerMusique(une_musique){
          

            if (this.filtre != 0){

                for (let musique of une_musique.tags){

                    if(musique.toLowerCase().indexOf(this.filtre.toLowerCase()) > -1){
                        return true
                    }
                }

            
                return false
            }
     
             return true
             
        }
    }

})