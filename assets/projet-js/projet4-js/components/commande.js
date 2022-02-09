import externalTemplate from '../externalTemplate.js'

export default externalTemplate({

    template_url: "assets/projet-js/projet4-js/components/commande.html",

    props: ["choix", "image", "titre", "temps"],

    data(){
        return {

            audio: new Audio(),

            est_en_train_de_jouer: false,
            choix_musique: "chansons/lone-wolf-10374.mp3",

            temps_actuel: 0,
            pourcentage_temps_musique: 0,

            mon_volume: 0.5,
            volume_pourcentage: 50,
        }
    },

    mounted() {
        // play, pause, ended, timeupdate
        this.audio.addEventListener("play", e => {
            this.est_en_train_de_jouer = true
        })

        this.audio.addEventListener("timeupdate", e => {
            this.temps_actuel = Math.floor(this.audio.currentTime)
            this.pourcentage_temps_musique = Math.floor((this.audio.currentTime*100)/this.temps)
        })

        // <audio src="food-vlog-11204.mp3">
        this.audio.setAttribute("src", this.choix_musique)
        this.audio.volume = 0.5
        // this.audio.pause()
    },

    methods: {
        musique_play(){
            this.audio.setAttribute("src", this.choix)
            this.audio.play()
        },
        musique_pause(){
            this.audio.pause()
            this.est_en_train_de_jouer = false
        },
        changer_volume(){
            this.audio.volume = this.mon_volume
            this.volume_pourcentage = Math.round(this.mon_volume * 100)
        },
        temps_musique(){

        },
    
    }

})